import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  margin-top: -6.12rem;
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const SignatureImage = styled.img`
  max-width: 62%;
  max-height: 62%;
  padding-left: 1.3em;
`;

export const StyledText = styled.h1`
  font-family: 'Odd', serif;
  font-size: 100px;
  font-weight: lighter;
  background-color: transparent;
  margin: 0;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10em;
  padding-left: 7em;
`;

export const StyledParagraph = styled.p`
  font-family: 'Courier', sans-serif;
  font-size: 12px;
  font-weight: lighter;
  display: flex;
  line-height: 1.5em;
  justify-content: flex-end;
  padding: 0 5em 0 25em;
`;

export const StyledWord = styled.h1`
  font-family: 'Odd', serif;
  font-size: 100px;
  font-weight: lighter;
  background-color: transparent;
  margin-top: -.5em;
  padding-left: 1.1em;
`;
