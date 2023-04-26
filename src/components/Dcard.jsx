import {
    Button,
    Input,
    Box,
    Card,
    Textarea,
    Stack,
    Text ,
    Heading,
    useColorMode,
    Divider,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import {  DeleteIcon } from '@chakra-ui/icons'

const Dcard = ({data, handleDelete}) => {
    console.log(data)
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('#F8F8FF','#212529');
  return (
    <Card 
    bg={bg}
    padding={5}
    className="Bcontainer"
    maxHeight={'auto'}
    boxSize={'300px'}>
    <Stack spacing={5}>
    <Heading size='sm' noOfLines={1}>
  {data.title}
</Heading>
<Divider />
<Text>
   {data.desc} 
</Text>



<IconButton
  onClick={()=>handleDelete(data.id)}
  position={'absolute'}
  bottom={10}
  right={125}
  id='deleteicon'
  aria-label='Delete Data'
  icon={<DeleteIcon />}
/>

        
        
        
    </Stack>
</Card>
  )
}

export default Dcard