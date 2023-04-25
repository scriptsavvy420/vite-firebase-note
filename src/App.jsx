import { useState } from 'react'
import { Button, ButtonGroup,Input,useColorMode,Box,Card, Textarea, Stack, SimpleGrid } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'

import './App.css'
import Dcard from './components/Dcard';
import Acard from './components/Acard';

function App() {
  const [count, setCount] = useState(0)
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode)

  return (
    <>
    
    <Box className='navbar' backgroundColor={'darkviolet'}>
     <Heading size='xl'>Noty</Heading> 
     
     <Button  onClick={toggleColorMode}>
          {colorMode}
        </Button>
    </Box>
    <SimpleGrid
  
 minChildWidth={300}
  spacing='8'
  p='10'
  textAlign='center'
  rounded='lg'
  
>
  <Acard/>
  <Dcard/>
  <Dcard/>
  <Dcard/>

  
 
   
    </SimpleGrid>
   
        

     
     
    </>
  )
}

export default App
