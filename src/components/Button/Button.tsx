import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
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

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
