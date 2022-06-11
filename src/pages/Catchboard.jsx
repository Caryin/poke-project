import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { usePokemon } from '../contexts/pokemon-context';
import MainModal from '../components/guess-game/MainModal';

const Catchboard = () => {
  const { wildPokemons, catchPokemon, getRandomPokemon } = usePokemon();
  const [appear, setAppear] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const makeNewAppear = () => {
    const newAppear = getRandomPokemon();
    setAppear(newAppear);
  };

  useEffect(() => {
    makeNewAppear();
  }, []);

  const guessGameSuccessful = () => {
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
    <>
      <MainModal
        isOpen={isOpen}
        onClose={onClose}
        guessGameSuccessful={guessGameSuccessful}
      />
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
            <Button colorScheme='messenger' onClick={makeNewAppear}>
              Release
            </Button>
            <Button colorScheme='red' onClick={onOpen}>
              Catch
            </Button>
          </HStack>
        </VStack>
      </Container>
    </>
  );
};

export default Catchboard;
