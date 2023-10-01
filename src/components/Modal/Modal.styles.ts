import styled from "styled-components";

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f8f6ed;
  padding: 3em 10em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

export const ModalContent = styled.div`
  text-align: center;
`;

export const ModalButton = styled.button`
background-color: transparent;
color: black;
margin-top: 1em;
margin-right: -5px;
padding: 5px 15px;
border: 0.5px solid black;
cursor: pointer;
border-radius: 20px;
width 20px;
font-family: 'Courier', sans-serif;
font-size: 12px;

&:hover {
  background-color: black;
  color: #F8F6ED;
}
`;
