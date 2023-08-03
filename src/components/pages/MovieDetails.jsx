// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Failed to fetch movie details', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Movies Details: {movieDetails.title}</h1>
      <ul>
        <li>
          <Link to={`movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
