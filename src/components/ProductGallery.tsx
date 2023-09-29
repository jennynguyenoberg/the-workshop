import React, { useState, useEffect } from 'react';
import { Product } from '../types/types';
import ProductItem from './ProductItem';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductGallery: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <GalleryContainer>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </GalleryContainer>
  );
};

export default ProductGallery;
