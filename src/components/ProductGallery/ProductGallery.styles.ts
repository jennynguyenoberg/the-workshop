import styled, { keyframes } from "styled-components";

interface DotProps {
  delay: string;
}

export const GalleryContainer = styled.div`
  margin: 5em 4em;
`;

export const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -4em;
  padding: 0;
`;

export const LoadingWrapper = styled.div`
  font-family: "Courier", sans-serif;
  font-size: 12px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 10em;
`;

const BounceAnimation = keyframes`
  0% { 
    transform: translateY(0);
  }

  50% { 
    transform: translateY(-5px);
  }

  100% { 
    transform: translateY(0);
  }
`;

export const Dot = styled.div<DotProps>`
  background-color: black;
  border-radius: 50%;
  width: 0.15rem;
  height: 0.15rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
