import React from 'react';
import { Product } from '../types/types';
import styled from 'styled-components';
import productsData from '../data/products.json';

const ProductItemContainer = styled.div`
  
`;

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <ProductItemContainer>
      <img src={product.img} alt={product.name} />
    </ProductItemContainer>
  );
};

const Hero: React.FC = () => {
  if (productsData.length > 0) {
    const firstProduct = productsData[0];

    return (
      <div>
        <h1>The Workshop</h1>
        <ProductItem product={firstProduct} />
      </div>
    );
  } else {
    return <div>No products available.</div>;
  }
};

export default Hero;
