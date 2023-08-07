import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../../API';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchMovies('popular')
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch popular movies', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = event => {
    event.preventDefault();
    setLoading(true);
    searchMovies(query)
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to search movies', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <Loader />
      ) : (
        <>
          {movies.map(movie => (
            <Link key={movie.id} to={`movies/${movie.id}`}>
              {movie.title}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Movies;
