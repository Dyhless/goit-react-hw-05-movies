import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { searchMovies } from '../../API';
import Loader from 'components/Loader/Loader';
import {
  MoviesContainer,
  SearchForm,
  MoviesGrid,
  MovieCard,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadMoreBtnVisible, setIsLoadMoreBtnVisible] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchMoviesByQuery = async () => {
      setLoading(true);
      try {
        const data = await searchMovies(query);
        const moviesWithAbsolutePaths = data.map(movie => ({
          ...movie,
          poster_path: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : null,
        }));
        setMovies(moviesWithAbsolutePaths);
        setIsLoadMoreBtnVisible(false);
      } catch (error) {
        console.error('Failed to search movies', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByQuery();
  }, [query]);

  const handleSearch = event => {
    event.preventDefault();
    setMovies([]);
    setPage(1);
    setQuery(event.target.value);
  };

  return (
    <MoviesContainer>
      <SearchForm onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </SearchForm>

      {loading && <Loader />}

      <MoviesGrid>
        {movies.map(
          movie =>
            movie.poster_path !== null && (
              <MovieCard key={movie.id}>
                <img src={movie.poster_path} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
              </MovieCard>
            )
        )}
      </MoviesGrid>
    </MoviesContainer>
  );
};

Movies.propTypes = {
  filteredMovies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default Movies;
