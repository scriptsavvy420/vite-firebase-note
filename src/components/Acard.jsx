import {
    Button,
    Input,
    Box,
    Card,
    Textarea,
    Stack,
    useColorMode
} from '@chakra-ui/react';
import { useState } from 'react';

const Acard = ({sendData}) => {
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const { colorMode, toggleColorMode } = useColorMode();
    const handleAdd=()=>{
        console.group()
        console.log('Adding');
        console.log(title);
        console.log(desc);
        sendData(title,desc)

    }
    const handleChangeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleChangeDesc=(e)=>{
        setDesc(e.target.value)
    }
    return (
        <Card  bg={colorMode==='dark'?'#212529':'light.100'}
        padding={5}
            className="Bcontainer"
            maxHeight={'auto'}
            boxSize={'300px'}>
            <Stack spacing={5}>
                <Input width='auto' variant='filled' placeholder='Title' onChange={handleChangeTitle}/>
                <Textarea placeholder='Description about the task . . . .'  onChange={handleChangeDesc}/>
                <Button bg={'brand.red'}
                    onClick={handleAdd}
                    variant='outline'>
                    Add
                </Button>
            </Stack>
        </Card>
    )
}

export default Acard
