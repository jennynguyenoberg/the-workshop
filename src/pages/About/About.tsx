import Footer from "../../components/Footer/Footer";
import {
  StyledMainContainer,
  StyledLeftContainer,
  StyledRightContainer,
} from "./About.styles";

const About: React.FC = () => {
  return (
    <>
      <StyledMainContainer>
        <StyledLeftContainer>
          <h1>About Us</h1>
          <p>
            This is an online art gallery showcasing the work of talented
            artists.
          </p>
        </StyledLeftContainer>
        <StyledRightContainer></StyledRightContainer>
      </StyledMainContainer>
      <Footer />
    </>
  );
};

export default About;
