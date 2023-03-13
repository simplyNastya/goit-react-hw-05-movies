// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchMovies } from 'services/apiMovies';
import styles from './moviesPage.module.css';

const Movies = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({
      query: e.currentTarget.elements.movieTitle.value ?? '',
    });
    // e.currentTarget.reset();
  };

  useEffect(() => {
    const query = searchParams.get('query');
    const fetchMovie = async () => {
      try {
        const { data } = await searchMovies(query);
        setMovies([...data.results]);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    if (query) {
      fetchMovie();
    } else {
      setMovies([]);
    }
  }, [searchParams]);

  return (
    <main>
      <section className={styles.moviesSearchSection}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            name="movieTitle"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchBtn}>
            Search
          </button>
        </form>
        <ul className={styles.moviesList}>
          {movies &&
            movies.map(movie => (
              <li key={movie.id} className={styles.movieItem}>
                <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
                  {movie.title}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Movies;
