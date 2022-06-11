import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';

import GameModal from './GameModal';
import GameSettingModal from './GameSettingModal';

const MainModal = ({ isOpen, onClose, guessGameSuccessful }) => {
  const [startGame, setStartGame] = useState(false);
  const [gameLevel, setGameLevel] = useState('medium');

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
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Guess Game</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!startGame ? (
              <GameSettingModal
                startGame={startGame}
                startGameHandler={startGameHandler}
                gameLevel={gameLevel}
                setGameLevel={setGameLevel}
              />
            ) : (
              <GameModal
                guessGameSuccessful={guessGameSuccessful}
                onClose={onClose}
                gameLevel={gameLevel}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MainModal;
