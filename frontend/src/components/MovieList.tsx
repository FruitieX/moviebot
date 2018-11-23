import * as React from 'react';
interface Props {
  movieList: string[];
}

export class MovieList extends React.Component<Props> {
  render() {
    console.log(this.props.movieList);
    let movies = this.props.movieList.map(movie => <div>{movie}</div>);
    return <div>{movies}</div>;
  }
}
