import React from 'react'
import CardComponent from './commonComponents/CardComponent'
import { Flex, SimpleGrid } from '@chakra-ui/react'

const Courses = () => {
  return (
    <>
        {/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 4fr))' margin='40px' alignItems='center'> */}
        <Flex justifyContent='space-around'>

            <CardComponent title={'Hello'} bodyContent={'Content'}/>
            <CardComponent title={'Hello'} bodyContent={'Content'}/>
            <CardComponent title={'Hello'} bodyContent={'Content'}/>
        </Flex>
        {/* </SimpleGrid> */}
    </>
  )
}

export default Courses

