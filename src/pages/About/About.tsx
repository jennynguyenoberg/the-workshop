import Footer from '../../components/Footer/Footer';
import { StyledMainContainer } from './About.styles';

const About: React.FC = () => {
  return (
    <>
      <StyledMainContainer>
        <h1>About Us</h1>
        <p>This is an online art gallery showcasing the work of talented artists.</p>
      </StyledMainContainer>
      <Footer />
    </>
  );
};

export default About;
