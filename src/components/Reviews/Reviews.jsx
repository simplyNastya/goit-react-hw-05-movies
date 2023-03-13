// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/apiMovies';
import styles from './reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        const { data } = await getMovieReviews(id);
        setReviews([...data.results]);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    fetchMovieReview();
  }, [id]);

  return (
    <main>
      <section className={styles.reviewSection}>
        <ul className={styles.reviewList}>
          {Boolean(!reviews.length) &&
            "We don't have any reviews for this movie"}
          {reviews.map(review => (
            <li key={review.id} className={styles.reviewItem}>
              <h4 className={styles.reviewTitle}>Author: {review.author}</h4>
              <p className={styles.reviewText}>{review.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Reviews;
