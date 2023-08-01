/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../API';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {
    // HTTP запрос
  }, []);

  return (
    <>
      <h1>Movies Details: {movieId}</h1>
      <ul>
        <li>
          <Link to="movie_details">Cast: {getMovieDetails}</Link>
        </li>
        <li>
          <Link to="movie_creadits">Cast: {getMovieCredits}</Link>
        </li>
        <li>
          <Link to="movie_reviews">Reviews: {getMovieReviews}</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
