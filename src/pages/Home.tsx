import React from 'react';
import ProductGallery from '../components/ProductGallery/ProductGallery';
import Hero from '../components/Header/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProductGallery />
    </div>
  );
};

export default Home;