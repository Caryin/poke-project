//chakraUI
import { Heading, Text, VStack } from '@chakra-ui/react';
import { usePokemon } from '../store/pokemon-context';

const WildPokemons = () => {
  const { wildPokemons } = usePokemon();

  return (
    <VStack p={4} m={10} borderRadius={40}>
      <Heading fontSize='2xl' py={4} fontWeight='black'>
        Gotta Catch 'Em All
      </Heading>
      {wildPokemons.map((pokemon) => (
        <Text key={pokemon.id} fontSize='xl' as='i' color='gray.600'>
          {pokemon.pokemon}
        </Text>
      ))}
    </VStack>
  );
};

export default WildPokemons;
