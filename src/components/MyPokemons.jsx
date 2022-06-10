import { Container, Text, VStack } from '@chakra-ui/react';
import { usePokemon } from '../store/pokemon-context';
import DashboardItem from './DashboardItem';

const MyPokemons = () => {
  const { myPokemons } = usePokemon();

  return (
    <Container maxW='container.lg'>
      <VStack>
        <Text fontSize='2xl' p={4}>
          My Pokemons
        </Text>
      </VStack>
      <VStack spacing='10px'>
        {myPokemons.map((pokemon) => (
          <DashboardItem key={pokemon.id} data={pokemon} />
        ))}
      </VStack>
    </Container>
  );
};

export default MyPokemons;
