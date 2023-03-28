import axios from 'axios';

const API_KEY = '5cc33dbe2a444448fed26d3844693d78';
const BASE_API_URL = 'api.themoviedb.org/3'

export const getTrendingMovies = () => {
    return axios.get(`https://${BASE_API_URL}/trending/movie/day?api_key=${API_KEY}`)
}

export const getMovieDetails = (movie_id) => {
    return axios.get(`https://${BASE_API_URL}/movie/${movie_id}?api_key=${API_KEY}`)
}

export const searchMovies = (title) => {
    return axios.get(`https://${BASE_API_URL}/search/movie?api_key=${API_KEY}&query=${title}&page=1&include_adult=true`)
}

export const getMovieCast = (id) => {
  return axios.get(
    `https://${BASE_API_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
};

export const getMovieReviews = (id) => {
  return axios.get(
    `https://${BASE_API_URL}/movie/${id}/reviews?api_key=${API_KEY}&page=1`
  );
};

export const getVideo = (id) => {
  return axios.get(
    `https://${BASE_API_URL}/movie/${id}/videos?api_key=${API_KEY}`
  );
};