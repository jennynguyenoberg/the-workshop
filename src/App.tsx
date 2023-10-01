import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import { createGlobalStyle } from "styled-components";
import OddFontWoff from "./assets/fonts/Ogg-Regular.woff";
import OddFontWoff2 from "./assets/fonts/Ogg-Regular.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Odd';
    src: local('Odd'), local('Odd'),
    url(${OddFontWoff2}) format('woff2'),
    url(${OddFontWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F8F6ED;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
