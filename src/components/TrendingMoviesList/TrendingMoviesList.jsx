// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './trendingMoviesList.module.css';

const TrendingMoviesList = ({ movies }) => {
  const elements = movies.map(({ id, poster_path, original_title }) => (
    <li key={id} className={styles.item}>
      <Link to={`/movies/${id}`} className={styles.link}>
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
