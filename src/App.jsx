import { useState,useEffect } from 'react'
import { Button, ButtonGroup,Input,useColorMode,useColorModeValue,Box,Text, SimpleGrid } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection,doc,getDocs ,addDoc} from "firebase/firestore";
import Dcard from './components/Dcard';
import Acard from './components/Acard';

import {  MoonIcon,SunIcon } from '@chakra-ui/icons'



function App() {
  const bg = useColorModeValue('#ffa987', '#0d060f')
  const [data,setData]=useState([])
  const firebaseConfig = {
    apiKey: "AIzaSyAwzh57gLN-OHRUQ7qiFVlaZHwnmk3LXK8",
    authDomain: "notepad-e7fd4.firebaseapp.com",
    projectId: "notepad-e7fd4",
    storageBucket: "notepad-e7fd4.appspot.com",
    messagingSenderId: "61828373416",
    appId: "1:61828373416:web:962a63cb6a24c7e406db9d",
    measurementId: "G-2MZPZLCM20"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const colRef = collection(db, "notes");
  // console.log(citiesRef);
  //const analytics = getAnalytics(app);
  useEffect(()=>{
    getDocs(colRef).then((snapshot)=>{
      let tasks=[]
      snapshot.docs.forEach((doc)=>{
        tasks.push({...doc.data(),id:doc.id})
        
    })
    setData(tasks);
  
    }).catch((err)=>{console.log(err)});
  
    
  },[])
 
const  handleData=async(title,desc)=>{
  console.log(title,desc)
  await addDoc(collection(db, "notes"), {
    title: title,
    desc: desc,
    
  });
}
  
  const [count, setCount] = useState(0)
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode)


  return (
    <>
    
    <Box className='navbar' bgColor={bg}>
     <Heading size='xl'>Noty</Heading> 
     
     <Button variant='outline'border='2px' borderColor={'brand.red'} onClick={toggleColorMode}>
          {colorMode==='dark'?<SunIcon/>:<MoonIcon/>}
        </Button>
    </Box>
    <SimpleGrid  
    spacing={10}
  minChildWidth={300}
  p='10'
  textAlign='center'
  rounded='lg'
  
>
  <Acard sendData={handleData}/>
 {data.map((ele)=>{
  console.log(data)
  return(<Dcard key={ele.id} data={ele}/>)
 })
  
 }

  
 
   
    </SimpleGrid>
   
        

    <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
  Developed By Xfinity
</Text>
     
    </>
  )
}

export default App
