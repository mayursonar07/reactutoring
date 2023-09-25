import { Box, Center, Divider, Flex, VStack, useMediaQuery } from '@chakra-ui/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import Courses from '../Courses'

const ContactPage = () => {

  const [isMobile] = useMediaQuery("(max-width: 500px)");

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required'),
        topics: Yup.string().required('Please mention at least 1 topic'),
        contact: Yup.number().required('Please mention your whatsapp number'),
    })

    const contactInfoTitle = 'Get in Touch';
    const body = 'Please submit your details to receive a callback';

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (captchaToken) {
          const { fname, lname, email, topics, contact } = formData;
          
          try {
            // const response = await fetch('http://localhost:3000/send-email', {
            const response = await fetch('http://mailapi.reactutor.com:3000/send-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ fname, lname, email, topics, contact }),
            });
            
            const data = await response.json();
            console.log(data.message);
            // Handle the response from the backend
          } catch (error) {
            console.log(error);
            // Handle the error
          }
        }
      };

  return (
    <>
      {
        isMobile 
        ?
        <Flex id='contactPage-mainSection' bg="#fefaed" h='500px' flexDirection='column'>
          <Center id='section-left' width='100%' h='100%' mb='15px'>
            <ContactInfo title={contactInfoTitle} bodyText={body}/>
          </Center>
          {/* <Divider orientation='vertical' /> */}
          <Center id='section-right' width='100%' h='100%' mb='15px'>
            <Box width='80%' height='430px' bg='white' borderRadius='15px' color='gray.300' border='1px'>
              <ContactForm/>
            </Box>
          </Center>
        </Flex>

        :

        <Courses/>
      }
        
    </>
  )
}

export default ContactPage
