import {
    Button,
    Input,
    Box,
    Card,
    Textarea,
    Stack
} from '@chakra-ui/react';
import { useState } from 'react';

const Acard = () => {
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const handleAdd=()=>{
        console.group()
        console.log('Adding');
        console.log(title);
        console.log(desc);

    }
    const handleChangeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleChangeDesc=(e)=>{
        setDesc(e.target.value)
    }
    return (
        <Card padding={5}
            className="Bcontainer"
            maxHeight={'auto'}
            boxSize={'300px'}>
            <Stack spacing={5}>
                <Input width='auto' variant='filled' placeholder='Title' onChange={handleChangeTitle}/>
                <Textarea placeholder='Description about the task . . . .'  onChange={handleChangeDesc}/>
                <Button bg={'darkviolet'}
                    onClick={handleAdd}
                    variant='outline'>
                    Add
                </Button>
            </Stack>
        </Card>
    )
}

export default Acard
