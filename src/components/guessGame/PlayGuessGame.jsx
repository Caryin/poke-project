import { Button, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const medium = [
  {
    min: 10,
    max: 100,
  },
];

const PlayGuessGame = () => {
  const [range, setRange] = useState(medium);
  const [guessValue, setGuessValue] = useState('');
  const [numOfAttempts, setNumOfAttempts] = useState(3);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const guessValueHandler = (e) => {
    setGuessValue(parseInt(e.target.value));
  };

  const randomNum = 50;

  const attemptHandler = () => {
    if (guessValue === randomNum) {
      setIsSuccessful(true);
    } else {
      setNumOfAttempts((numOfAttempts) => numOfAttempts - 1);
    }

    setGuessValue('');
  };

  return (
    <VStack p={6}>
      {numOfAttempts > 0 && (
        <>
          <Text textAlign='center'>Pick a number between 1 to 100.</Text>
          <Text textAlign='center'>You have {numOfAttempts} turns.</Text>
          <Input
            type='number'
            w='50%'
            textAlign='center'
            onChange={guessValueHandler}
            value={guessValue}
          />
          <Button w='20%' colorScheme='red' onClick={attemptHandler}>
            Try
          </Button>
        </>
      )}
      {numOfAttempts === 0 && (
        <>
          <Heading size='md' color='red.500'>
            Opps! You failed to catch.
          </Heading>
        </>
      )}
    </VStack>
  );
};

export default PlayGuessGame;
