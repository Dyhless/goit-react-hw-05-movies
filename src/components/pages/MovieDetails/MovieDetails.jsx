import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from '../../API';
import GoBackButton from '../../BackButton/BackButton';
import {
  Container,
  Img,
  LinkInfo,
  Hr,
  SubTitle,
  AddInfoList,
  List,
} from './MovieDetails.styled';
import { ToastContainer, Slide } from 'react-toastify';

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

  const { title, popularity, overview, genres, poster_path } = movieDetails;

  return (
    <>
      <ToastContainer transition={Slide} />
      <GoBackButton />
      <Container>
        {poster_path ? (
          <Img
            width="300px"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        ) : (
          <div>No poster available</div>
        )}
        <div>
          <h1>{title}</h1>
          <p>User score: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <List>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </List>
        </div>
      </Container>
      <Hr />
      <SubTitle>Additional information</SubTitle>
      <AddInfoList>
        <li>
          <LinkInfo to={`/movies/${movieId}/cast`}>Cast</LinkInfo>
        </li>
        <li>
          <LinkInfo to={`/movies/${movieId}/reviews`}>Reviews</LinkInfo>
        </li>
      </AddInfoList>
      <Hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;
