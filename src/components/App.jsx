import { BrowserRouter } from 'react-router-dom';

import Cast from './Cast/Cast';
import Navbar from './Navbar/Navbar';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import TrendingMoviesList from './TrendingMoviesList/TrendingMoviesList';
import Reviews from './Reviews/Reviews';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import SearchMoviesForm from './SearchMoviesForm/SearchMoviesForm';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Movies />
        <SearchMoviesForm />
        <TrendingMoviesList />
        <MovieDetails />
        <Cast />
        <Reviews />
        <NotFound />
      </BrowserRouter>
    </div>
  );
};
