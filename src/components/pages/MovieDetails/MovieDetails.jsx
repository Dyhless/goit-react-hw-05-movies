import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../API';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch movie details', error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Movies Details: {movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
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
