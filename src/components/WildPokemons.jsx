//chakraUI
import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { usePokemon } from '../store/pokemon-context';

const WildPokemons = () => {
  const { wildPokemons, catchPokemon } = usePokemon();

  return (
    <Container maxW='container.lg'>
      <VStack>
        <Text fontSize='2xl' p={4}>
          Gotta Catch 'Em All
        </Text>
      </VStack>
      <VStack spacing='10px'>
        {wildPokemons.map((pokemon) => (
          <Heading key={pokemon.id}>
            {pokemon.pokemon}
            <Button onClick={() => catchPokemon(pokemon.id)}>+</Button>
          </Heading>
        ))}
      </VStack>
    </Container>
  );
};

export default WildPokemons;
