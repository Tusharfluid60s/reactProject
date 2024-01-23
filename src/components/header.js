import React from 'react'
import {Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Button,
    useDisclosure,
    VStack,HStack} from "@chakra-ui/react"
    import {Link} from "react-router-dom"
    import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {

  
    const {isOpen, onOpen, onClose } = useDisclosure();
    // gis bhi function ke agge use likha h vo hook h we will se in next project

  
  return (

  
    <>
      <Button
      pos={'fixed'}
      top={'4'}
      colorScheme='messenger'
      p={'0'}
      left={'2'}
      w={'10'}
      h={10}
      borderRadius={'full'}
      onClick={onOpen}>
      {/* top is margin top  , p is padding , w is widht and h is height*/}

        <BiMenuAltLeft size={'20'}/>
      </Button>
      <Drawer isOpen={isOpen} placement='left'  onClose={onClose}>

<DrawerOverlay/>

<DrawerContent>
  <DrawerCloseButton/>
  <DrawerHeader>Video Hub</DrawerHeader>

  <DrawerBody>
  
    <VStack alignItems={'flex-start'}>
    {/* Vstack  is verticalStackin which displey is flex and the content of it is in center and many more  and one more is HStack */}
      <Button onClick={onClose} variant={"ghost"} colorScheme='messenger'>
        <Link to={'/'}>Home</Link>
          </Button>
      <Button onClick={onClose} variant={"ghost"} colorScheme='messenger' >
        <Link to={'/videos'}>Videos</Link>
      </Button>
      <Button onClick={onClose} variant={"ghost"} colorScheme='messenger' >
        <Link to={'/video?category!free'}>Free Videos</Link>
      </Button>
      <Button onClick={onClose} variant={"ghost"} colorScheme='messenger' >
        <Link to={'/upload'}>Upload Videos</Link>
      </Button>
      </VStack>


<HStack pos={'absolute'} bottom={'10'}>
{/* its Horizontal stack */}
<Button onClick={onClose} colorScheme='messenger'>
  <Link to={'/login'}>Login</Link>
</Button>

<Button onClick={onClose} colorScheme='messenger' variant={'outline'}>
  <Link to={'/signup'}>Sign Up</Link>
</Button>

</HStack>
    
  </DrawerBody>
</DrawerContent>

      </Drawer>
    </>
  )
}

export default Header