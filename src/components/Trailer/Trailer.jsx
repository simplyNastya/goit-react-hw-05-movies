import useVideoArr from 'services/useVideoArr';
import SwiperM from 'components/Swiper/Swiper';
import styles from './trailer.module.css';

const Trailer = () => {
  const videos = useVideoArr();

  return (
    <section className={styles.trailerSection}>
      {Boolean(!videos.length) && "We don't have any trailers for this movie"}
      <SwiperM />
    </section>
  );
};

export default Trailer;
