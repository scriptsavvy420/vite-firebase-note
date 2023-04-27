import {
    Button,
    Input,
    Card,
    Textarea,
    Stack
} from '@chakra-ui/react';
import {useState} from 'react';

const Acard = ({sendData}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const bg =useColorModeValue('#F8F8FF','#212529')
    const handleAdd = () => {
        sendData(title, desc)
        setTitle('')
        setDesc('')

    }
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeDesc = (e) => {
        setDesc(e.target.value)
    }
    return (
        <Card bg={ bg }
            padding={5}
            className="Bcontainer"
            maxHeight={'auto'}
            boxSize={'300px'}>
            <Stack spacing={5}>
                <Input width='auto' variant='filled' placeholder='Title'
                    onChange={handleChangeTitle}
                    value={title}/>
                <Textarea variant='filled' placeholder='Description about the task . . . .'
                    onChange={handleChangeDesc}
                    value={desc}/>
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
