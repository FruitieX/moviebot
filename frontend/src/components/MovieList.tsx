import * as React from 'react';
import * as t from 'io-ts';
import { SearchResult } from '../types/Movie';

interface Props {
  movieList: t.TypeOf<typeof SearchResult>[];
}

export class MovieList extends React.Component<Props> {
  render() {
    console.log(this.props.movieList);
    let movies = this.props.movieList.map(movie => (
      <div key={movie.imdbID}>{movie.Title}</div>
    ));
    return <div>{movies}</div>;
  }
}
