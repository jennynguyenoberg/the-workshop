import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMainContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  padding: 2.5em 2.5em;
  font-family: "Courier", sans-serif;
  font-size: 12px;
  border-top: 1px solid black;
`;

export const StyledContainer = styled.div``;

export const StyledNavLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
