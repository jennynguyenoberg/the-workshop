import { useState, useEffect } from 'react';
import { Product } from '../../types/types';
import ProductItem from '../ProductItem/ProductItem';
import productsData from '../../data/products.json';
import { GalleryContainer, ProductRow } from './ProductGallery.styles'; // Import ProductRow

const ProductGallery: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Slice the last three products while ignoring the first product
  const lastThreeProducts = products.slice(1).slice(-3);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
          <GalleryContainer>
            {products.slice(1, -3).map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}

          <ProductRow>
            {lastThreeProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ProductRow>
        </GalleryContainer>
      )}
    </div>
  );
};

export default ProductGallery;