import { Box, Center, Divider, Flex, Heading, VStack, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import * as Yup from 'yup'
import ContactInfo from './contact/ContactInfo'
import ContactForm from './contact/ContactForm'

const BasicJSCourse = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  const basicTopicsList = ['HTML, CSS, and JavaScript', 
                          'Introduction to web development tools',
                          'Responsive web design',
                          'Document Object Model (DOM)',
                          'Introduction to Node.js',
                          'Live Projects' ];

  const advancedTopicsList = ['Advanced JavaScript, ES6, ES7', 
                          'React',
                          'Redux',
                          'Chakra UI, Tailwind CSS',
                          'Youtube clone project',
                          'NetFlix clone project'];

  return (
    <>
      <Center id='section' width='100%' h='100%'>
        <Heading size='md'>
          What you will learn
        </Heading>
      </Center>
      {
        isMobile 
        ?
        <Flex id='contactPage-mainSection' bg="#fefaed" h='500px' flexDirection='column'>
          <Center id='section-left' width='100%' h='100%' mb='15px'>
            <ContactInfo title='Basic'/>
          </Center>
          {/* <Divider orientation='vertical' /> */}
          <Center id='section-right' width='100%' h='100%' mb='15px'>
            <Box width='90%' height='80%' bg='white' borderRadius='15px' color='gray.300' border='1px'>
              <ContactInfo title='Advance'/>
            </Box>
          </Center>
        </Flex>

        :

        <Flex id='contactPage-mainSection' bg="#fefaed" h='500px'>
          <Center id='section-left' width='50%' h='90%' border='1px' margin='20px' borderColor='gray.300' borderRadius='20px'>
            <ContactInfo title='Basic' topicList={basicTopicsList}/>
          </Center>
          <Center id='section-right' width='50%' h='90%' border='1px' margin='40px' borderColor='gray.300' borderRadius='20px'>
            <Box width='90%' height='80%' bg='white' borderRadius='15px' color='gray.300' border='1px'>
              <ContactInfo title='Advance'/>
            </Box>
          </Center>
        </Flex>
      }
        
    </>
  )
}

export default BasicJSCourse