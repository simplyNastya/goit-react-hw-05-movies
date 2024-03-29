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
      <h1 className={styles.title}>Trending today</h1>
      <TrendingMoviesList movies={movies} />
    </section>
  );
};

export default Home;
