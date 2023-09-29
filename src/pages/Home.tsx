import React from 'react';
import ProductGallery from '../components/ProductGallery';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProductGallery />
    </div>
  );
};

export default Home;