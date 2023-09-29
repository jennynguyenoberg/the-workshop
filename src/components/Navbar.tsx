import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cartImage from "/images/Cart.svg"

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  z-index: 999;
  padding: 15px 32px;
`;

const StyledNavbar = styled.nav`
  z-index: 999;
  display: flex;
  gap: 2.5em;
`;

const StyledNavLink = styled(Link)`
  color: black;
  font-family: 'Courier', sans-serif;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    color: black; 
    text-decoration: underline;
  }
`;

const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border: .5px solid black;
  border-radius: 50%;
  color: none;
  background-color: transparent;
  cursor: pointer;
  background-image: url(${cartImage});
  background-size: cover;
  width: 34px;
  height: 34px;
  position: relative;
`;

const StyledNumberIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F9CB00;
  color: black;
  border-radius: 50%;
  font-size: 7px;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(25%, 25%);
  height: 14px;
  width: 14px;
`;

const StyledHomeLink = styled(Link)`
  color: black;
  font-family: 'Courier', sans-serif;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  transform: rotate(90deg) translateY(70px) translateX(90px);
  letter-spacing: .7em;

  &:hover {
    color: black; 
    text-decoration: underline;
  }
`;

const NavBar: React.FC = () => {
  return (
    <StyledContainer>
        <StyledNavbar>
          <StyledHomeLink to="/">
            The Workshop
          </StyledHomeLink>
          <StyledNavLink to="/about">
            Carl Auböck Designs 1930—1980
          </StyledNavLink>
        </StyledNavbar>
        <StyledContainer>
          <StyledNavLink to="/about">
            About
          </StyledNavLink>
          <StyledButton>
            <StyledNumberIndicator>7</StyledNumberIndicator>
          </StyledButton>
        </StyledContainer>
      </StyledContainer>
  );
};

export default NavBar;