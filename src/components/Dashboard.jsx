//chakraUI
import {
  Container,
  HStack,
  Image,
  Heading,
  VStack,
  Flex,
  Spacer,
  Center,
  Text,
  Square,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';

//asset
import pokemonLogo from '../assets/pokemon-logo.png';

//components
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
