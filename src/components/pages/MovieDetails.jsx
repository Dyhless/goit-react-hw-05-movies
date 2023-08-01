import React from 'react';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../API';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return <>Movies Details</>;
};

export default MovieDetails;
