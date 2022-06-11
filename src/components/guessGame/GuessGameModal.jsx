import { useState } from 'react';
import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import SelectGameLevel from './SelectGameLevel';
import PlayGuessGame from './PlayGuessGame';

const GuessGameModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [startGame, setStartGame] = useState(false);

  const startGameHandler = () => {
    setStartGame(true);
  };

  return (
    <>
      <Button onClick={onOpen}>Guess Game</Button>
      <Modal
        isCentered
        onClose={() => {
          onClose();
          setStartGame(false);
        }}
        isOpen={isOpen}
        motionPreset='slidInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Guess Game</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!startGame ? (
              <SelectGameLevel
                startGame={startGame}
                startGameHandler={startGameHandler}
              />
            ) : (
              <PlayGuessGame />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GuessGameModal;
