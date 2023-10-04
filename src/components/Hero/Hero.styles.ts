import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  margin-top: -6.12rem;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin-top: 0;
  }
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

    @media only screen and (max-width: 992px) {
      display: none;
    }
`;
  
export const SignatureImage = styled.img`
  max-width: 45%;
  max-height: 45%;
  padding-left: 1.3em;
`;


export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 12em 0 -4em 0;
`;

export const StyledParagraph = styled.p`
  font-family: "Courier", sans-serif;
  font-size: 12px;
  font-weight: lighter;
  display: flex;
  line-height: 1.5em;
  justify-content: center;
  padding: 0 5em 0 25em;
  margin-top: -3em;
  margin-bottom: 3em;

  @media only screen and (max-width: 992px) {
    text-align: left;
    padding: 0 6.9em;
  }
`;

export const StyledText = styled.h1`
  font-family: "Odd", serif;
  font-size: 7em;
  font-weight: lighter;
  margin-left: 1em;

  @media only screen and (max-width: 992px) {
    font-size: 77px;
  }
`;

export const StyledWord = styled.h1`
  font-family: "Odd", serif;
  font-size: 7em;
  font-weight: lighter;
  background-color: transparent;
  margin-top: -0.5em;
  margin-left: 1em;

  @media only screen and (max-width: 992px) {
    font-size: 77px;
    margin-top: -0.4em;
  }
`;
