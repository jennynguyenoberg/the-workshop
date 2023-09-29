import React from 'react';
import { Product } from '../types/types';
import styled from 'styled-components';
import productsData from '../data/products.json';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  margin-top: -6.12rem;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const SignatureImage = styled.img`
  max-width: 62%;
  max-height: 62%;
`;

const StyledText = styled.h1`
  font-family: 'Odd', serif;
  font-size: 110px;
  font-weight: lighter;
  background-color: transparent;
  margin: 0;
`;

const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  margin-top: 10em;
  padding-left: 5em;
`;

const StyledParagraph = styled.p`
  font-family: 'Courier', sans-serif;
  font-size: 12px;
  font-weight: lighter;
  display: flex;
  line-height: 1.5em;
  justify-content: flex-end;
  padding: 0 5em 0 25em;
`;

const StyledWord = styled.h1`
  font-family: 'Odd', serif;
  font-size: 110px;
  font-weight: lighter;
  background-color: transparent;
  margin-top: -.5em;
  padding-left: .7em;
`;

interface HeroImageProps {
  product: Product;
}

const ProductItem: React.FC<HeroImageProps> = ({ product }) => {
  return (
    <RightSide>
      <HeroImage src={product.img} alt={product.name} />
    </RightSide>
  );
};

const Hero: React.FC = () => {
  if (productsData.length > 0) {
    const firstProduct = productsData[0];

    return (
      <Container>
        <LeftSide>
          <LeftSideContainer>
            <StyledText>The</StyledText>
            <SignatureImage src='/images/signature.svg' alt='Signature of Carl Auböck'></SignatureImage>
          </LeftSideContainer>
          <StyledWord>Workshop</StyledWord>
          <StyledParagraph>Carl Auböck: A Visionary of Modern Design, Masterfully Crafting Timeless Pieces.</StyledParagraph>
        </LeftSide>
        <ProductItem product={firstProduct} />
      </Container>
    );
  } else {
    return <div>No products available.</div>;
  }
};

export default Hero;
