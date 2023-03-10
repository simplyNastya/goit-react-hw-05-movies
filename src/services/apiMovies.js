import axios from 'axios';

const API_KEY = '5cc33dbe2a444448fed26d3844693d78';
const BASE_API_URL = 'api.themoviedb.org/3'

export const getTrendingMovies = () => {
    return axios.get(`https://${BASE_API_URL}/trending/movie/day?api_key=${API_KEY}`)
}