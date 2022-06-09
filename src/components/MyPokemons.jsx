import { Container, Text, VStack } from '@chakra-ui/react';
import { usePokemon } from '../store/pokemon-context';
import DashboardItem from './DashboardItem';

const MyPokemons = () => {
  const { setWildPokemons, myPokemons, setMyPokemons } = usePokemon();

  const releasePokemon = (id) => {
    const newMyPokemons = myPokemons.filter((p) => p.id !== id);

    setMyPokemons(newMyPokemons);

    const removePokemon = myPokemons.find((p) => p.id === id);

    setWildPokemons((prev) => [...prev, removePokemon]);
  };

  return (
    <Container maxW='container.lg'>
      <VStack>
        <Text fontSize='2xl' p={4}>
          My Pokemons
        </Text>
      </VStack>
      <VStack spacing='10px'>
        {myPokemons.map((pokemon) => (
          <DashboardItem
            key={pokemon.id}
            data={pokemon}
            releasePokemon={releasePokemon}
          />
        ))}
      </VStack>
    </Container>
  );
};

export default MyPokemons;
