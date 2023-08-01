import React, { useEffect } from 'react';
// import { getMovieDetails, getMovieCredits, getMovieReviews } from '../API';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {
    // HTTP запрос
  }, []);

  return <>Movies Details: {movieId}</>;
};

export default MovieDetails;
