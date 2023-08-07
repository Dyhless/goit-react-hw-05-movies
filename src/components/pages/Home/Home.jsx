import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../API';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => {
      setTrendingMovies(data);
    });
  }, []);

  return (
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
  );
};

export default Home;
