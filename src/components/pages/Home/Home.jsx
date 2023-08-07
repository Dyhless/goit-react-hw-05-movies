import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../API';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch trending movies', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>Popular Movies</h1>
          <ul>
            {trendingMovies.map(movie => (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Home;
