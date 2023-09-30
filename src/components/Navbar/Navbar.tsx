import {
  StyledContainer,
  StyledNavbar,
  StyledHomeLink,
  StyledNavLink,
  StyledButton,
  StyledNumberIndicator
} from './Navbar.styles';

const NavBar: React.FC = () => {
  return (
    <StyledContainer>
      <StyledNavbar>
        <StyledHomeLink to="/">
          The Workshop
        </StyledHomeLink>
        <StyledNavLink to="/">
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
