import * as React from 'react';
import * as t from 'io-ts';
import { SearchResults } from '../types/Movie';

interface Props {
  movieList: t.TypeOf<typeof SearchResults>;
}

export class MovieList extends React.Component<Props> {
  render() {
    console.log(this.props.movieList);
    let movies = this.props.movieList.map(movie => <div>{movie.Title}</div>);
    return <div>{movies}</div>;
  }
}
