import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cartImage from "/images/Cart.svg"

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

const StyledNavbar = styled.nav`
  
`;

const StyledNavLink = styled(Link)`
  color: red;
  text-decoration: none;

  &:hover {
    color: #ff0000; 
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

const NavBar: React.FC = () => {
  return (
    <StyledContainer>
        <StyledNavbar>
          <StyledNavLink to="/">
            Home
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