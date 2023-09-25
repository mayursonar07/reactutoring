import { Box, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const ContactInfo = ({title, bodyText, topicList}) => {
    
    let renderList = '';
    if(topicList) {
        renderList = topicList.map((topic)=>{
            return (
                <li>{topic}</li>
            )
        })
    }
  return (
    <>
    <Box width='80%' height='80%'>
        <Center flexDirection='column'>
            <Heading size='xl' margin='20px'> 
                {title}
            </Heading>
            <Text>{bodyText}</Text>
            <Text>
                <ul>

                {renderList}
                </ul>
                </Text>
        </Center>
    </Box>
    </>
  )
}

export default ContactInfo
