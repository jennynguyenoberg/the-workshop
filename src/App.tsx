import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import styled, { createGlobalStyle } from 'styled-components';

// Create a global style to reset the margin on the body element
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Odd';
    src: url('/src/assets/fonts/Ogg-Regular.woff2') format('woff2'),
        url('/src/assets/fonts/Ogg-Regular.woff') format('woff');
  }
  
  body {
    margin: 0;
    padding: 0;
  }
`;

const StyledContainer = styled.main`
  background-color: #F8F6ED;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </StyledContainer>
    </>
  );
};

export default App;
