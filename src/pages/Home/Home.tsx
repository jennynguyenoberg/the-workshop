import React from "react";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import Hero from "../../components/Header/Header";
import { StyledMainContainer } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <StyledMainContainer>
      <Hero />
      <ProductGallery />
    </StyledMainContainer>
  );
};

export default Home;
