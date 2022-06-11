import { useState } from 'react';

import {
  Radio,
  RadioGroup,
  Stack,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

const SelectGameLevel = ({ startGame, startGameHandler }) => {
  const [gameLevel, setGameLevel] = useState('medium');

  return (
    <>
      <RadioGroup onChange={setGameLevel} value={gameLevel}>
        <Stack>
          <Radio value='easy' colorScheme='yellow' size='lg'>
            Easy
          </Radio>
          <Radio value='medium' colorScheme='orange' size='lg'>
            Medium
          </Radio>
          <Radio value='hard' colorScheme='red' size='lg'>
            Hard
          </Radio>
        </Stack>
      </RadioGroup>
      <ModalFooter>
        <Button
          onClick={startGameHandler}
          colorScheme='messenger'
          value={startGame}
        >
          Start
        </Button>
      </ModalFooter>
    </>
  );
};

export default SelectGameLevel;
