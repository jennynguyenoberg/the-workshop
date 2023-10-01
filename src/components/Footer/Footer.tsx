import {
  StyledMainContainer,
  StyledContainer,
  StyledNavLink,
} from "./Footer.styles";

const Footer: React.FC = () => {
  const linkStyle = {
    marginRight: "8px",
    marginLeft: "8px",
  };

  return (
    <StyledMainContainer>
      <StyledContainer>
        Images courtesy of
        <StyledNavLink
          to="https://www.wright20.com/"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wright
        </StyledNavLink>
        © Rago Wright LLC 2023.
      </StyledContainer>
      <StyledContainer>
        Development and design by
        <StyledNavLink
          to="https://www.jennynguyenoberg.com/"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          Jenny Nguyen Öberg
        </StyledNavLink>
        © 2023.
      </StyledContainer>
    </StyledMainContainer>
  );
};

export default Footer;
