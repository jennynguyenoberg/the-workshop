import { Product } from "../../types/types";
import productsData from "../../data/products.json";
import {
  Container,
  LeftSide,
  RightSide,
  HeroImage,
  SignatureImage,
  StyledText,
  LeftSideContainer,
  StyledParagraph,
  StyledWord,
} from "./Hero.styles";

interface HeroImageProps {
  product: Product;
}

const ProductItem: React.FC<HeroImageProps> = ({ product }) => {
  return (
    <RightSide>
      <HeroImage src={product.img} alt={product.name} />
    </RightSide>
  );
};

const Hero: React.FC = () => {
  // Check for the first item in the array and render only the first item
  if (productsData.length > 0) {
    const firstProduct = productsData[0];

    return (
      <Container>
        <LeftSide>
          <LeftSideContainer>
            <StyledText>The</StyledText>
            <SignatureImage
              src="/images/signature.svg"
              alt="Signature of Carl Auböck"
            ></SignatureImage>
          </LeftSideContainer>
          <StyledWord>Workshop</StyledWord>
          <StyledParagraph>
            Carl Auböck: A Visionary of Modern Design, Masterfully Crafting
            Timeless Pieces.
          </StyledParagraph>
        </LeftSide>
        <ProductItem product={firstProduct} />
      </Container>
    );
  } else {
    return <div>No products available.</div>;
  }
};

export default Hero;
