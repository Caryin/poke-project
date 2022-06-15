import {
  Button,
  Heading,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { usePokemon } from '../../contexts/pokemon-context';
import { GAMESETTING } from './gameSetting';

const GameModal = ({ guessGameSuccessful, onClose, gameLevel }) => {
  const [range, setRange] = useState(GAMESETTING[gameLevel]);
  const [numOfAttempts, setNumOfAttempts] = useState(3);
  const [secretNumber, setSecretNumber] = useState(1);
  const [userInput, setUserInput] = useState('');
  const toast = useToast();
  const { makeNewAppear, appear } = usePokemon();

  useEffect(() => {
    getSecretNumber();
  }, []);

  const getSecretNumber = () => {
    const number = range.max - range.min + 1;
    const random = Math.floor(Math.random() * number) + range.min;
    setSecretNumber(random);
  };

  const userInputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const attemptHandler = () => {
    if (userInput.trim() === '') {
      return;
    }

    let userGuess = parseInt(userInput);

    if (userGuess < range.min || userGuess > range.max) {
      toast({
        title: 'Out of range!',
        description: ` Make a guess between ${range.min} and ${range.max}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (userGuess === secretNumber) {
      guessGameSuccessful();
      onClose();
    } else {
      setNumOfAttempts((numOfAttempts) => numOfAttempts - 1);
      if (numOfAttempts === 1) {
        toast({
          title: 'You failed to catch!',
          description: `${appear.pokemon} has fled`,
          status: 'warning',
          duration: 5000,
          isClosable: false,
          position: 'top',
        });

        makeNewAppear();
      }
      if (userGuess > secretNumber) {
        setRange((prev) => ({ ...prev, max: userGuess - 1 }));
      } else if (userGuess < secretNumber) {
        setRange((prev) => ({ ...prev, min: userGuess + 1 }));
      }
    }

    setUserInput('');
  };

  return (
    <VStack p={6}>
      {numOfAttempts > 0 && (
        <>
          <Text>
            Pick a number between {range.min} to {range.max}.
          </Text>
          <Text>You have {numOfAttempts} turns.</Text>
          <Input
            type='number'
            w='50%'
            onChange={userInputHandler}
            value={userInput}
            textAlign='center'
          />
          <Button w='20%' colorScheme='red' onClick={attemptHandler}>
            Try
          </Button>
        </>
      )}
      {numOfAttempts === 0 && (
        <VStack py={2}>
          <Heading size='xl' color='#CC0000'>
            FAILED!
          </Heading>
          <Heading size='md' py={3}>
            The correct answer was: {secretNumber}.
          </Heading>
        </VStack>
      )}
    </VStack>
  );
};

export default GameModal;
