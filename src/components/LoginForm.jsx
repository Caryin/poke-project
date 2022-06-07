//assets
import loginImage from '../assets/loginImage.png';

//chakraUI
import {
  SimpleGrid,
  GridItem,
  AspectRatio,
  Image,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

function LoginForm() {
  return (
    <SimpleGrid
      w='full'
      alignContent='center'
      columns={2}
      columnGap={10}
      bg='blue.200'
      borderRadius='lg'
    >
      <GridItem>
        <AspectRatio ratio={3 / 4}>
          <Image src={loginImage} />
        </AspectRatio>
      </GridItem>
      <GridItem>
        <FormControl>
          <Heading textAlign='center' py={4}>
            Login
          </Heading>
          <FormLabel>Username:</FormLabel>
          <Input />
          <FormLabel>Password:</FormLabel>
          <Input />

          <Button w='full' size='lg' text='center' my={10}>
            Let's catch
          </Button>
        </FormControl>
      </GridItem>
    </SimpleGrid>
  );
}

export default LoginForm;
