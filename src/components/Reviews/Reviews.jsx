import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../API';
import { ToastContainer, toast, Slide } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { Item, List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const errorToastText = 'Ooops... Something went wrong';

  useEffect(() => {
    const fetchReviewsFilms = async () => {
      setLoading(true);
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData);
      } catch {
        toast.error(errorToastText, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchReviewsFilms();
  }, [movieId]);

  const noReviewsContent = <div>No reviews</div>;
  const reviewsContent = reviews.map(({ author, content, id }) => (
    <Item key={id}>
      <h2>Author: {author}</h2>
      <p>{content}</p>
    </Item>
  ));

  return (
    <>
      <ToastContainer transition={Slide} />
      {loading && <Loader />}
      <List>{reviews.length === 0 ? noReviewsContent : reviewsContent}</List>
    </>
  );
};

export default Reviews;
