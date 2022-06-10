import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { usePokemon } from '../store/pokemon-context';

const Catchboard = () => {
  const { wildPokemons, catchPokemon, getRandomPokemon } = usePokemon();
  const [appear, setAppear] = useState({});
  const toast = useToast();

  const makeNewAppear = () => {
    const newAppear = getRandomPokemon();
    setAppear(newAppear);
  };

  useEffect(() => {
    makeNewAppear();
  }, []);

  const handleCatch = () => {
    catchPokemon(appear.id);
    if (wildPokemons.length === 0) {
      return;
    }
    toast({
      position: 'top',
      title: `Caught ${appear.pokemon} `,
      description: `You have caught a new pokemon.`,
      status: 'success',
      duration: 7000,
      isClosable: true,
    });
    makeNewAppear();
  };

  return (
    <Container maxW='container.lg'>
      <VStack bg='yellow.100' p={20} rounded={20} m={10}>
        <Heading color='gray.700'>Rare Pokemon appeared!</Heading>
        {wildPokemons.length > 0 && (
          <VStack borderRadius={20} p={20} m={10} bg='whiteAlpha.700'>
            <Heading>{appear.pokemon}</Heading>
            <Text>Attack: {appear.ATK}</Text>
            <Text>HP: {appear.HP}</Text>
            <Text>SP: {appear.SP}</Text>
            <Text>Type: {appear.Type}</Text>
          </VStack>
        )}
        <HStack>
          <Button colorScheme='telegram' onClick={makeNewAppear}>
            Release
          </Button>
          <Button colorScheme='red' onClick={handleCatch}>
            Catch
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Catchboard;
