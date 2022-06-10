import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack bg='#3B4CCA' w='full' justifyContent='flex-end' p={4}>
      <Link to='/'>
        <Button size='lg' variant='ghost' color='white'>
          Home
        </Button>
      </Link>
      <Link to='/catch'>
        <Button size='lg' colorScheme='red' variant='solid' color='white'>
          Catch
        </Button>
      </Link>
    </HStack>
  );
};

export default NavBar;
