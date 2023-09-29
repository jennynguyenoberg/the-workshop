import { useState, useEffect } from 'react';
import { Product } from '../types/types';
import ProductItem from './ProductItem';
import styled from 'styled-components';
import productsData from '../data/products.json';

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductGallery: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <GalleryContainer>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </GalleryContainer>
      )}
    </div>
  );
};

export default ProductGallery;
