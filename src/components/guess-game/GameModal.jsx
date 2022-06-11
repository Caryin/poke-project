import { Button, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { GAMESETTING } from './gameSetting';

const GameModal = ({ guessGameSuccessful, onClose, gameLevel }) => {
  const [range, setRange] = useState(GAMESETTING[gameLevel]);
  const [numOfAttempts, setNumOfAttempts] = useState(3);
  const [secretNumber, setSecretNumber] = useState(1);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    getSecretNumber();
  }, []);

  const getSecretNumber = () => {
    const number = range.max - range.min + 1;
    const random = Math.floor(Math.random() * number);
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
    if (userGuess === secretNumber) {
      guessGameSuccessful();
      onClose();
    } else if (userGuess > secretNumber) {
      setRange((prev) => ({ ...prev, max: userGuess }));
      setNumOfAttempts((numOfAttempts) => numOfAttempts - 1);
    } else if (userGuess < secretNumber) {
      setRange((prev) => ({ ...prev, min: userGuess }));
      setNumOfAttempts((numOfAttempts) => numOfAttempts - 1);
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
          />
          <Button w='20%' colorScheme='red' onClick={attemptHandler}>
            Try
          </Button>
          <Text>the answer is {secretNumber}</Text>
        </>
      )}
      {numOfAttempts === 0 && (
        <>
          <Heading size='md' color='red.500'>
            Opps! You failed to catch.
          </Heading>
          <Text>The correct answer is: {secretNumber}. </Text>
        </>
      )}
    </VStack>
  );
};

export default GameModal;
