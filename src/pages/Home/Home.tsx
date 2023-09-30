import React from 'react';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import Hero from '../../components/Header/Header';
import { StyledMainContainer } from './Home.styles';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <StyledMainContainer>
      <Hero />
      <ProductGallery />
      <Footer />
    </StyledMainContainer>
  );
};

export default Home;