// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import { getTrendingMovies } from 'services/apiMovies';
import styles from './homePage.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        console.log(trendingMovies.data.results);
        setMovies(trendingMovies.data.results);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section className={styles.trendingMoviesSection}>
      <TrendingMoviesList movies={movies} />
    </section>
  );
};

export default Home;
