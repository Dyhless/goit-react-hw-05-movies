import { useEffect, useState, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from '../../API';
import { ToastContainer, Slide } from 'react-toastify';
import {
  Container,
  Img,
  LinkInfo,
  Hr,
  SubTitle,
  AddInfoList,
  List,
  BackButton,
  BackLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const backPrevLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieInfo(details);
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

  if (!movieInfo) {
    return <div>Loading...</div>;
  }

  const { title, popularity, overview, genres, poster_path } = movieInfo;

  return (
    <>
      <ToastContainer transition={Slide} />
      <BackButton type="button">
        <BackLink to={backPrevLocation.current}>Go back</BackLink>
      </BackButton>
      {movieInfo && (
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
      )}
      <Hr />
      <SubTitle>Additional information</SubTitle>
      <AddInfoList>
        <li>
          <LinkInfo to="cast">Cast</LinkInfo>
        </li>
        <li>
          <LinkInfo to="reviews">Reviews</LinkInfo>
        </li>
      </AddInfoList>
      <Hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;