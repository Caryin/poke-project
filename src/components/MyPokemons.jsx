import {
  Heading,
  SimpleGrid,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { usePokemon } from '../store/pokemon-context';
import DashboardItem from './DashboardItem';

const MyPokemons = () => {
  const { myPokemons } = usePokemon();
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <VStack m={10} p={4} pb={6} flex={1} borderRadius={40}>
      <Heading fontSize='4xl' py={4} px={12}>
        My Pokemons
      </Heading>
      {myPokemons.length === 0 && (
        <Heading as='i' size='lg' color='gray.400'>
          Go Catch !!
        </Heading>
      )}
      <SimpleGrid columns={columns} spacing={6}>
        {myPokemons.map((pokemon) => (
          <DashboardItem key={pokemon.id} data={pokemon} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default MyPokemons;
