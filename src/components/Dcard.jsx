import {
    Button,
    Input,
    Box,
    Card,
    Textarea,
    Stack,
    Heading
} from '@chakra-ui/react';

const Dcard = () => {
  return (
    <Card padding={5}
    className="Bcontainer"
    maxHeight={'auto'}
    boxSize={'300px'}>
    <Stack spacing={5}>
    <Heading size='sm' noOfLines={1}>
  Basic text writing, including headings, body text, lists, and more.
</Heading>
        
        
        
    </Stack>
</Card>
  )
}

export default Dcard