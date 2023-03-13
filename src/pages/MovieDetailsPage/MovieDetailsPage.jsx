// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from 'services/apiMovies';
import styles from './movieDetailsPage.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setMovie(movieDetails.data);
        setGenres([...movieDetails.data.genres]);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    fetchMovieDetails();
  }, [id]);

  const goBack = () => navigate(from);

  return (
    <main>
      <section className={styles.movieDetailsSection}>
        <button onClick={goBack} type="button" className={styles.goBackBtn}>
          Go back
        </button>
        <div className={styles.movieDetails}>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              width="355"
              className={styles.movieImg}
            />
          )}
          <div className={styles.mainMovieInfo}>
            <h2 className={styles.movieTitle}>{movie.original_title}</h2>
            <p className={styles.movieSubtitleText}>
              Vote average: <span> </span>
              <span className={styles.movieSubtitleSpan}>
                {movie.vote_average}
              </span>
            </p>
            <h3 className={styles.movieSubtitleOverview}>Overview</h3>
            <p className={styles.movieSubtitleText}>{movie.overview}</p>
            <h3 className={styles.movieSubtitleGenre}>Genres</h3>
            <p className={styles.movieSubtitleText}>
              {genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
        </div>
        <div className={styles.additMovieInfo}>
          <h2 className={styles.additMovieTitle}>Additional information</h2>
          <ul className={styles.additMovieList}>
            <li className={styles.additMovieItem}>
              <Link
                to="cast"
                state={{ from }}
                className={styles.additMovieLink}
              >
                Cast
              </Link>
            </li>
            <li className={styles.additMovieItem}>
              <Link
                to="reviews"
                state={{ from }}
                className={styles.additMovieLink}
              >
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
