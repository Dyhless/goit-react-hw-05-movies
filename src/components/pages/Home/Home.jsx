import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import {
  Title,
  MovieTitle,
  MovieList,
  MovieLink,
  MoviePoster,
} from './Home.styled';
import { getTrendingMovies } from '../../API';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch trending movies', error);
        setLoading(false);
      }
    };

    loadTrendingMovies();
  }, []);

  const filteredMovies = trendingMovies.filter(
    movie => movie.title && movie.id
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Title>Popular Movies</Title>
          <MovieList>
            {filteredMovies.map(movie => (
              <li key={movie.id}>
                <MovieLink
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: 'home' },
                  }}
                >
                  <MoviePoster
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <MovieTitle data-is-long-title={movie.title.length > 25}>
                    {movie.title}
                  </MovieTitle>
                </MovieLink>
              </li>
            ))}
          </MovieList>
        </>
      )}
    </>
  );
};

export default Home;
