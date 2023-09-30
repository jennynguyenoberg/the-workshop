import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  border: 1px solid #ccc;
  padding: 0;
  margin: 0;
  max-width: 100%;
  font-family: 'Courier', sans-serif;
  font-size: 12px;
  line-height: 1.5em;
  background-color: blue;
`;

export const ProductText = styled.div`
  flex: 1;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;

export const ProductImage = styled.img`
  max-width: 45%;
  height: auto;
`;

export const ProductTextContent = styled.div`
  margin-top: 2em;
`;
  
  export const ProductTextPara = styled.p`
  margin: 0;
`;