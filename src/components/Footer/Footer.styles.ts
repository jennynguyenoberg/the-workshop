import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMainContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 2.5em 2.5em;
  font-family: "Courier", sans-serif;
  font-size: 12px;
  border-top: 0.5px solid black;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledContainer = styled.div`
  margin: 8px 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const StyledNavLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
