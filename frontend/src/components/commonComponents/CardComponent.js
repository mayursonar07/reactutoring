import { Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const CardComponent = ({title, bodyContent}) => {
  return (
    <>
        <Card width='300px' margin='20px'>
            <CardHeader>
                <Heading size='md'> {title}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{bodyContent}</Text>
            </CardBody>
            <CardFooter>
                
            </CardFooter>
        </Card>
    </>
  )
}

export default CardComponent

