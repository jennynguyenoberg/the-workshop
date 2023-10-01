import React, { useState, useEffect } from "react";
import { Product } from "../../types/types";
import ProductItem from "../ProductItem/ProductItem";
import productsData from "../../data/products.json";
import { GalleryContainer, ProductRow, LoadingWrapper, Dot } from "./ProductGallery.styles";

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
        <LoadingWrapper>
          Loading
          <Dot delay="0s" />
          <Dot delay="0.1s" />
          <Dot delay="0.2s" />
        </LoadingWrapper>
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
