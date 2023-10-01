import styled from "styled-components";

export const StyledMainContainer = styled.div`
  height: 100vh;
  margin: 5em 2em;
  font-family: "Courier", sans-serif;
  font-size: 12px;
  line-height: 1.5em;
  text-align: justify;
  display: flex;
  align-items: center;
  margin-top: -2rem;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    margin-bottom: -3rem;
    margin-top: 3em;
  }
`;

export const StyledLeftContainer = styled.div`
  width: 50%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledParagraph = styled.p`
  @media (min-width: 992px) {
    margin: 0 10em;
  }
`;

export const StyledRightContainer = styled.div`
  width: 50%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledImageContainer = styled.div`
  height: 100%;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const StyledImage1 = styled.img`
  margin-bottom: 13em;
  padding-right: 3.5em;
`;

// @media (max-width: 992px) {
//   margin-top: 3em;
//   display: flex;
//   justify-content: center;
// }
