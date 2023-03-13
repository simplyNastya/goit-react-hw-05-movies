import { Routes, Route } from "react-router-dom";

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

const UserRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/movies/:id/cast" element={<Cast />} />
        <Route path="/movies/:id/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default UserRoutes;