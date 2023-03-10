import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
// import Cast from './Cast/Cast';
// import TrendingMoviesList from './TrendingMoviesList/TrendingMoviesList';
// import Reviews from './Reviews/Reviews';
// import SearchMoviesForm from './SearchMoviesForm/SearchMoviesForm';

import navbarMenuItems from '../data/navbarMenuItems.json';

export const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar menuItems={navbarMenuItems} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie-details" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* <Cast />
        <Reviews /> */}
      </BrowserRouter>
    </div>
  );
};
