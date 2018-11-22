import * as React from 'react';
interface Props {
  movieList: string[];
}

export class MovieList extends React.Component<Props> {
  render() {
    let movies = this.props.movieList.map(movie => {
      <div>movie</div>;
    });
    return <ul>{movies}</ul>;
  }
}
