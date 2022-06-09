import { useState } from 'react';

//chakraUI
import { Container, Image, Text, VStack } from '@chakra-ui/react';

//asset
import pokemonLogo from '../assets/pokemon-logo.png';

//store
import pokemonData from '../store/pokemon.json';

//components
import DashboardItem from './DashboardItem';
import WildPokemons from './WildPokemons';
import MyPokemons from './MyPokemons';

const Dashboard = () => {
  // const [pokemons, setPokemons] = useState(pokemonData);

  // const handleRemove = (id) => {
  //   const newPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
  //   setPokemons(newPokemons);
  // };

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
      <VStack spacing='10px'>
        {/* {pokemons.map((pokemon) => (
          <DashboardItem
            key={pokemon.id}
            data={pokemon}
            handleRemove={handleRemove}
          />
        ))} */}
        <MyPokemons />
      </VStack>
      <VStack>
        <WildPokemons />
      </VStack>
    </Container>
  );
};

export default Dashboard;
