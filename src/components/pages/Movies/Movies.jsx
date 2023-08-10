import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../API';
import Loader from 'components/Loader/Loader';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import SearchBar from 'components/SearchForm/SearchForm';
import {
  MoviesGrid,
  MovieTitle,
  MovieLink,
  MoviePoster,
} from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchClicked, setSearchClicked] = useState(false);
  const [isLoadMoreBtnVisible, setIsLoadMoreBtnVisible] = useState(false);
  const [query, setQuery] = useState(location.state?.query || ''); // Здесь изменили

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
        setPage(1);
      } catch (error) {
        console.error('Failed to search movies', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByQuery();
  }, [query]);

  const loadMore = async () => {
    setPage(prevPage => prevPage + 1);
    setLoading(true);
    try {
      const data = await searchMovies(query, page + 1);
      if (data.length === 0) {
        setIsLoadMoreBtnVisible(false);
        return;
      }
      const moviesWithAbsolutePaths = data.map(movie => ({
        ...movie,
        poster_path: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : null,
      }));
      setMovies(prevMovies => [...prevMovies, ...moviesWithAbsolutePaths]);
    } catch (error) {
      console.error('Failed to load more movies', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = newQuery => {
    setMovies([]);
    setPage(1);
    setQuery(newQuery);
    setSearchClicked(true);

    navigate('/movies', { state: { query: newQuery } });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          {searchClicked && (
            <MoviesGrid>
              {movies.map(movie =>
                movie.poster_path ? (
                  <li key={movie.id}>
                    <MovieLink to={`/movies/${movie.id}`}>
                      <MoviePoster
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <MovieTitle data-is-long-title={movie.title.length > 25}>
                        {movie.title}
                      </MovieTitle>
                    </MovieLink>
                  </li>
                ) : null
              )}
            </MoviesGrid>
          )}
          {isLoadMoreBtnVisible && <LoadMoreButton onClick={loadMore} />}
        </>
      )}
    </>
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
