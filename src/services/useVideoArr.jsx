import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getVideo } from './apiMovies';

const useVideoArr = () => {
  const [videos, setVideo] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieVideo = async () => {
      try {
        const movieVideo = await getVideo(id);
        setVideo([...movieVideo.data.results]);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    fetchMovieVideo();
  }, [id]);

  return videos;
};

export default useVideoArr;
