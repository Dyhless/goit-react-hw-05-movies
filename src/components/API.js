import axios from 'axios';

const API_KEY = 'b4ef19b8e9db5b53dec85dc073650305'; 
const API_BASE_URL = 'https://api.themoviedb.org/3';
const trending_movies = '/trending/all/day';
const search_movies = '/search/movie';
const movie_details = '/movie';
const movie_credits = '/credits';
const movie_reviews = '/reviews';

const getMovie = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  const response = await getMovie.get(trending_movies);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await getMovie.get(search_movies, {
    params: { query },
  });
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await getMovie.get(`${movie_details}/${movieId}`);
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await getMovie.get(`${movie_details}/${movieId}${movie_credits}`);
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await getMovie.get(`${movie_details}/${movieId}${movie_reviews}`);
  return response.data.results;
};
