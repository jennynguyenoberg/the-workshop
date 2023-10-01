import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalButton,
} from "./Modal.styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  return (
    <>
      <ModalOverlay isOpen={isOpen} />
      <ModalContainer isOpen={isOpen}>
        <ModalContent>
          <p>{message}</p>
          <ModalButton onClick={onClose}>Close</ModalButton>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default Modal;
