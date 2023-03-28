import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Virtual } from 'swiper';

import useVideoArr from 'services/useVideoArr';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';

import styles from './swiper.module.css';

const SwiperM = () => {
  const videos = useVideoArr();

  const videosNew = [...videos].reverse();

  const slides = videosNew.map(video => (
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
      modules={[Navigation, Pagination, Virtual]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      virtual
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
