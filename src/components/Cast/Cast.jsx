import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getMovieCredits } from '../API';
import { Img, List, Text } from './Cast.styled';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onActorsOfMovie = async () => {
      setLoading(true);
      try {
        const actorsData = await getMovieCredits(movieId);
        setActors(actorsData);
      } catch {
        toast.error('Sorry. No info.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      } finally {
        setLoading(false);
      }
    };
    onActorsOfMovie();
  }, [movieId]);

  const noImage =
    'https://www.bilo-teploservice.info-gkh.com.ua/assets/images/noimage.png';

  return (
    <div>
      <ToastContainer transition={Slide} />
      {loading && <Loader />}
      {actors.length > 0 ? (
        <List>
          {actors.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <Img
                width="200px"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : noImage
                }
                alt={name}
              />
              <Text>{name}</Text>
              <Text>Character: {character}</Text>
            </li>
          ))}
        </List>
      ) : (
        <p>No actors information available.</p>
      )}
    </div>
  );
};

export default Cast;
