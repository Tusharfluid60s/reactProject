import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, VStack , Text } from "@chakra-ui/react"
import {AiOutlineSend ,AiFillInstagram,AiFillGithub} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.800'} h={[80,40]} p={'16'} color={'white'}>
  <Stack direction={['column','row']}>

  
  {/* see the chakra  styleprops form google */}
  {/* py means padding-top + padding-bottom and px means padding-inline-start + padding-inline-end */}
  {/* mx means margin-inline-start + margin-inline-end and my means margin-top + margin-bottom */}

  <VStack w={'full'} px={4} alignItems={'stretch'} >
  {/* md is mediam screen */}
    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']} >Subscribe to get updates</Heading>
  

<HStack>
<Input placeholder='Enter Email Here...' ></Input>
<Button variant={'ghost'} colorScheme='messenger' borderRadius={'0 20px 20px 0'}>
  <AiOutlineSend size={20}/>
</Button>

</HStack>

</VStack>

{/* ab Vstack giska w full h vo adha adha apace lelenge */}
<VStack w={'full'}  borderLeft={['none','1px solid white']} borderRight={['none','1px  solid white']}>
<Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>video hub</Heading>
<Text>All rights received</Text>
</VStack>


<VStack w={'full'}>
<Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>


<HStack>
<AiFillGithub size={20}/>
<Button variant={'link'} colorScheme='messenger'>
<a href="https://instagram.com/_tushar_kumar_______">Instagram</a>
</Button>
</HStack>

<HStack >
<AiFillInstagram size={20}/>
<Button variant={'link'} colorScheme='messenger'>
<a href="https://github.com/Tusharfluid60s">Git Hub</a>
</Button>
</HStack>


</VStack>

  </Stack>
    </Box>
    
  )
}

export default Footer