import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/MoviesPage'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const lazyWithLoader = Component => props =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={lazyWithLoader(Home)()} />
        <Route path="movies" element={lazyWithLoader(Movies)()} />
        <Route path="movies/:movieId" element={lazyWithLoader(MovieDetails)()}>
          <Route path="cast" element={lazyWithLoader(Cast)()} />
          <Route path="reviews" element={lazyWithLoader(Reviews)()} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
