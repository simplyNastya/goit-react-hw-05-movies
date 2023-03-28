import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube, Virtual } from 'swiper';

import useVideoArr from 'services/useVideoArr';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/effectcube';
import 'swiper/css/virtual';

import styles from './swiper.module.css';

const SwiperM = () => {
  const videos = useVideoArr();

  //   .sort(
  //     (firstItem, secondItem) =>
  //       firstItem.published_at - secondItem.published_at
  //   )

  const slides = videos.map(video => (
    <>
      <iframe
        key={video.id}
        src={`https://www.youtube.com/embed/${video.key}`}
        title="trailerItem"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <p className={styles.trailerTitle}>{video.name}</p>
    </>
  ));
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCube, Virtual]}
      spaceBetween={50}
      slidesPerView={2}
      virtual
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      className={styles.swiper}
    >
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperM;
