import { Box, Button, Center, Flex, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactForm = () => {
  return (
    <>
        
            <Center flexDirection='column'>
              <Input placeholder='Name' color='gray.800' width='80%'  margin='10px' mt='40px'/>
              <Input placeholder='Email' color='gray.800' width='80%' margin='10px'  />
              <Input placeholder='WhatsApp number' color='gray.800' width='80%' margin='10px'  />
              <Textarea placeholder='Any topics to learn / Comments' resize='none' color='gray.800' width='80%' margin='10px'  />
              <Button mt='20px' ml='26px' colorScheme='yellow' color='gray.800' variant='solid'>Submit</Button>
            </Center>
        
    </>
  )
}

export default ContactForm

