import React from 'react';
import ProductGallery from '../components/ProductGallery';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Art Gallery</h1>
      <ProductGallery />
    </div>
  );
};

export default Home;