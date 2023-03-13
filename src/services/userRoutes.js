import { Routes, Route } from "react-router-dom";

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Cast from "components/Cast/Cast";

const UserRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/movies/:id/cast" element={<Cast/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default UserRoutes;