import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
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
} from './MoviesPage.styled';

const MoviesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchClicked, setSearchClicked] = useState(false);
  const [isLoadMoreBtnVisible, setIsLoadMoreBtnVisible] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    const initialQuery = queryParams.query || '';

    setQuery(initialQuery);
    if (initialQuery) {
      fetchMoviesByQuery(initialQuery);
    }
  }, [location.search]);

  const fetchMoviesByQuery = async query => {
    setLoading(true);
    try {
      const data = await searchMovies(query);
      setMovies(data);
      setPage(1);
      setIsLoadMoreBtnVisible(data.length > 0);
    } catch (error) {
      console.error('Failed to search movies', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearchSubmit = newQuery => {
    setSearchClicked(true);
    setMovies([]);
    setPage(1);

    const queryParams = { query: newQuery };
    navigate(`${location.pathname}?${queryString.stringify(queryParams)}`);
    setQuery(newQuery);
  };

  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`, {
      state: {
        from: location,
        query: query,
      },
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SearchBar initialValue={query} onSearch={handleSearchSubmit} />
          {searchClicked && (
            <MoviesGrid>
              {movies.map(
                movie =>
                  movie.poster_path && (
                    <li key={movie.id}>
                      <MovieLink
                        to={`/movies/${movie.id}`}
                        id={movie.id}
                        onClick={() => handleMovieClick(movie.id)}
                        state={{ from: location }}
                      >
                        <MoviePoster
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                        />
                        <MovieTitle
                          data-is-long-title={movie.title.length > 25}
                        >
                          {movie.title}
                        </MovieTitle>
                      </MovieLink>
                    </li>
                  )
              )}
            </MoviesGrid>
          )}
          {isLoadMoreBtnVisible && page > 1 && (
            <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
          )}
        </>
      )}
    </>
  );
};

MoviesPage.propTypes = {
  filteredMovies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default MoviesPage;
