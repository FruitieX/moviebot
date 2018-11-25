import * as t from 'io-ts';

export const Movie = t.type({
  Title: t.string,
  Year: t.string,
  Rated: t.string,
  Released: t.string,
  Runtime: t.string,
  Genre: t.string,
  Director: t.string,
  Writer: t.string,
  Actors: t.string,
  Plot: t.string,
  Language: t.string,
  Country: t.string,
  Awards: t.string,
  Poster: t.string,
  Metascore: t.string,
  imdbRating: t.string,
  imdbVotes: t.string,
  imdbID: t.string,
  Type: t.string,
});

export const SearchResult = t.type({
  Poster: t.string,
  Title: t.string,
  Type: t.string,
  Year: t.string,
  imdbID: t.string,
});

export const SearchResults = t.array(SearchResult);
