import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import { Container } from './App.styled';
import { Layout } from './Layout/Layout';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<MovieDetails />} />
          <Route path="/movies/:movieId/reviews" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
