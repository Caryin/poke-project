import { Flex, Image, useBreakpointValue, VStack } from '@chakra-ui/react';

import pokemonLogo from '../assets/pokemon-logo.png';

import MyPokemons from './MyPokemons';
import WildPokemons from './WildPokemons';

const Dashboard = () => {
  const Wrapper = useBreakpointValue({ base: VStack, md: Flex });

  return (
    <VStack>
      <VStack w='full' py={4}>
        <Image src={pokemonLogo} alt='pokemon logo' w='200px' h='80px' m={4} />
      </VStack>

      <Wrapper w='full'>
        <MyPokemons />
        <WildPokemons />
      </Wrapper>
    </VStack>
  );
};

export default Dashboard;
