import axios from 'axios';
import * as Omdb from '../types/Omdb'
import { formatValidationErrors } from '../utils/formatValidationErrors';

const BASE_URL = 'https://www.omdbapi.com';

const omdb = axios.create({
  baseURL: BASE_URL,
});

export const get = async (imdbID: string) => {
  const response = await omdb.get('/', {
    params: {
      i: imdbID,
      apikey: process.env.OMDB_API_KEY,
    },
  });

  // this dumbass API returns status 200 on errors
  if (response.data.Error) {
    throw new Error(response.data.Error);
  }

  return Omdb.Movie.decode(response.data).fold(
    errors => {
      throw new Error(formatValidationErrors(errors));
    },
    data => data,
  );
};

export const search = async (query: string) => {
  const response = await omdb.get('/', {
    params: {
      s: query,
      apikey: process.env.OMDB_API_KEY,
    },
  });

  // this dumbass API returns status 200 on errors
  if (response.data.Error) {
    throw new Error(response.data.Error);
  }

  return Omdb.SearchResponse.decode(response.data).fold(
    errors => {
      throw new Error(formatValidationErrors(errors));
    },
    data => data.Search,
  );
};

export default omdb;
