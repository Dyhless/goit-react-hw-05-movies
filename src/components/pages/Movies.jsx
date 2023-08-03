import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../API';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    searchMovies('popular').then(data => {
      setMovies(data);
    });
  }, []);

  const handleSearch = event => {
    event.preventDefault();
    searchMovies(query).then(data => {
      setMovies(data);
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

      {movies.map(movie => (
        <Link key={movie.id} to={`movies/${movie.id}`}>
          {movie.title}
        </Link>
      ))}
    </div>
  );
};

export default Movies;
