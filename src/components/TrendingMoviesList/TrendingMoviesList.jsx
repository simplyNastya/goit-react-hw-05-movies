import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './trendingMoviesList.module.css';

const TrendingMoviesList = ({ movies }) => {
  const location = useLocation();
  const elements = movies.map(({ id, poster_path, original_title }) => (
    <li key={id} className={styles.item}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className={styles.link}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={original_title}
          width="355"
          className={styles.img}
        />
        <p className={styles.subtitle}>{original_title}</p>
      </Link>
    </li>
  ));
  return (
    <>
      <h1 className={styles.title}>Trending today</h1>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default TrendingMoviesList;

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
