import axios from 'axios';
import { Movie } from '../types/Movie';
const BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: BASE_URL,
});

export const searchMovie = async (MovieName: string) => {
  const response = await api.get('/movie/search', {
    params: {
      filter: MovieName,
    },
  });
  return Movie.decode(response.data).fold(
    errors => {
      throw new Error(JSON.stringify(errors));
    },
    data => data,
  );
};
