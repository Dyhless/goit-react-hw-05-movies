import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {}, [movieId]);

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
