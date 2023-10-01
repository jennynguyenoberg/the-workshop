import styled from "styled-components";

export const ProductItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0;
  margin: 6em 0;
  font-family: "Courier", sans-serif;
  font-size: 12px;
  line-height: 1.5em;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 .5em;
  }
`;

export const ProductText = styled.div`
  flex: 1;
  padding: 0 24px;
  text-align: left;

  @media only screen and (max-width: 992px) {
    width: 100%;
    padding: 0;
`;

export const ProductImage = styled.img`
  @media only screen and (max-width: 992px) {
    width: 100%;
    margin: 1em 0; 
  }
`;

export const ProductTextContent = styled.div`
  margin-top: 2em;
`;

export const ProductTextPara = styled.p`
  margin: 0;
  width: 100%;
`;
