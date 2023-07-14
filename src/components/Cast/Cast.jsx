import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/apiMovies';
import noAvatar from '../../images/noAvatar.jpg';
import styles from './cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const { data } = await getMovieCast(id);
        setCast([...data.cast]);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    fetchMovieCast();
  }, [id]);

  const elements = cast.map(actor => (
    <li key={actor.id} className={styles.castItem}>
      {actor.profile_path ? (
        <img
          className={styles.castImg}
          src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
          alt={actor.name}
          width="180"
        />
      ) : (
        <img
          className={styles.castImg}
          src={noAvatar}
          alt={actor.name}
          width="180"
        />
      )}
      <div className={styles.castTextWrapper}>
        <p className={styles.castText}>{actor.name}</p>
        <p className={styles.castText}>Character: {actor.character}</p>
      </div>
    </li>
  ));

  return (
    <main>
      <section className={styles.castSection}>
        <ul className={styles.castList}>{elements}</ul>
      </section>
    </main>
  );
};

export default Cast;
