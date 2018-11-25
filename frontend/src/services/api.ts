import axios from 'axios';
import { SearchResults } from '../types/Movie';
import { formatValidationErrors } from '../utils/formatValidationErrors';
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
  return SearchResults.decode(response.data).fold(
    errors => {
      throw new Error(formatValidationErrors(errors));
    },
    data => data.results,
  );
};
