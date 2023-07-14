import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchMovies } from 'services/apiMovies';
import noImg from '../../images/noImage.jpg';
import { BsSearch } from 'react-icons/bs';
import styles from './moviesPage.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({
      query: e.currentTarget.elements.movieTitle.value ?? '',
    });
    e.currentTarget.reset();
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
        <div className={styles.formTextWrapper}>
          <p className={styles.upformText}>Let`s find something interesting!</p>
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
              <BsSearch
                styles={{
                  width: '25',
                }}
              />
            </button>
          </form>
        </div>
        <ul className={styles.moviesList}>
          {movies &&
            movies.map(({ id, poster_path, original_title }) => (
              <li key={id} className={styles.item}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: location }}
                  className={styles.link}
                >
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      alt={original_title}
                      width="275"
                      className={styles.img}
                    />
                  ) : (
                    <img
                      src={noImg}
                      alt={original_title}
                      width="275"
                      className={styles.img}
                    />
                  )}

                  <p className={styles.subtitle}>{original_title}</p>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Movies;
