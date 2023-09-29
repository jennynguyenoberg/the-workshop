import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-right: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </NavContainer>
  );
};

export default NavBar;
