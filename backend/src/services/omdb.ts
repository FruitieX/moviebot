import axios from 'axios';
const BASE_URL = 'https://www.omdbapi.com';

const omdb = axios.create({
  baseURL: BASE_URL,

  // TODO: why this no work
  /*
  params: {
    apikey: process.env.OMDB_API_KEY
  }
  */
})

export const search = async (query: string) => {
  // TODO: io-ts validations
  const response = await omdb.get('/', {
    params: {
      t: query,
      apikey: process.env.OMDB_API_KEY
    }
  });

  return response.data;
};

export default omdb;