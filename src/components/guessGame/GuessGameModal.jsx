import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';

import PlayGuessGame from './PlayGuessGame';
import SelectGameLevel from './SelectGameLevel';

const GuessGameModal = ({ isOpen, onClose, guessGameSuccessful }) => {
  const [startGame, setStartGame] = useState(false);

  const startGameHandler = () => {
    setStartGame(true);
  };

  return (
    <>
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
              <PlayGuessGame
                guessGameSuccessful={guessGameSuccessful}
                onClose={onClose}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GuessGameModal;
