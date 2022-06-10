//chakraUI
import { Container, HStack, Image, Text, VStack } from '@chakra-ui/react';
//asset
import pokemonLogo from '../assets/pokemon-logo.png';
import MyPokemons from './MyPokemons';
import WildPokemons from './WildPokemons';

const Dashboard = () => {
  return (
    <Container maxW='container.lg'>
      <VStack>
        <Image src={pokemonLogo} alt='pokemon logo' w='200px' h='80px' m={4} />
      </VStack>
      <VStack>
        <Text fontSize='2xl' p={4}>
          You've Got
        </Text>
      </VStack>
      <HStack>
        <VStack spacing='10px'>
          <MyPokemons />
        </VStack>
        <VStack>
          <WildPokemons />
        </VStack>
      </HStack>
    </Container>
  );
};

export default Dashboard;
