import * as React from 'react';
import { SearchField } from './SearchField';
import { Button } from './Button';
import { MovieList } from './MovieList';
import { searchMovie } from '../services/api';

export class SearchMovie extends React.Component {
  state = {
    searchMovie: '',
    resultMovies: [],
  };

  handleChange = (value: string) => {
    this.setState({ searchMovie: value });
  };
  handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const movies = await searchMovie(this.state.searchMovie);
    this.setState({
      resultMovies: movies,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <SearchField
          handleChange={this.handleChange}
          value={this.state.searchMovie}
        />
        <Button name="search" />
        <MovieList movieList={this.state.resultMovies} />
      </form>
    );
  }
}
