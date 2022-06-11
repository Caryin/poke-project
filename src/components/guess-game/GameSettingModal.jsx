import {
  Button,
  ModalFooter,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

const GameSettingModal = ({ startGameHandler, gameLevel, setGameLevel }) => {
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
        <Button onClick={startGameHandler} colorScheme='messenger'>
          Start
        </Button>
      </ModalFooter>
    </>
  );
};

export default GameSettingModal;
