// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Failed to fetch movie details', error);
      }
    };

    const fetchMovieCredits = async () => {
      try {
        const credits = await getMovieCredits(movieId);
        setMovieCredits(credits);
      } catch (error) {
        console.error('Failed to fetch movie credits', error);
      }
    };

    const fetchMovieReviews = async () => {
      try {
        const reviews = await getMovieReviews(movieId);
        setMovieReviews(reviews);
      } catch (error) {
        console.error('Failed to fetch movie reviews', error);
      }
    };

    fetchMovieDetails();
    fetchMovieCredits();
    fetchMovieReviews();
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
