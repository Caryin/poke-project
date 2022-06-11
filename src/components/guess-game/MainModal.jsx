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
  const [isStarted, setIsStarted] = useState(false);
  const [gameLevel, setGameLevel] = useState('easy');

  const startGameHandler = () => {
    setIsStarted(true);
  };

  return (
    <>
      <Modal
        isCentered
        onClose={() => {
          onClose();
          setIsStarted(false);
        }}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Guess the Number</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!isStarted ? (
              <GameSettingModal
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
