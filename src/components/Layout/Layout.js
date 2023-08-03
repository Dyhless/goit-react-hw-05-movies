import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
