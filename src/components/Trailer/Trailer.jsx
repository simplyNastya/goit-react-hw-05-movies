import useVideoArr from 'services/useVideoArr';
import Swiper from 'components/Swiper/Swiper';
import styles from './trailer.module.css';

const Trailer = () => {
  const videos = useVideoArr();

  return (
    <section className={styles.trailerSection}>
      {/* <ul className={styles.trailerList}>
        {Boolean(!videos.length) && "We don't have any trailers for this movie"}
        {videos
          //   .sort(
          //     (firstItem, secondItem) =>
          //       firstItem.published_at - secondItem.published_at
          //   )
          .map(video => (
            <li key={video.id} className={styles.trailerItem}>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                title="trailerItem"
                width="640"
                height="360"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              <p>{video.name}</p>
            </li>
          ))}
      </ul> */}
      <Swiper />
    </section>
  );
};

export default Trailer;
