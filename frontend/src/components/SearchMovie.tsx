import * as React from 'react';
import { SearchField } from './SearchField';
import { Button } from './Button';

export class SearchMovie extends React.Component {
  state = {
    searchMovie: '',
    resultMovies: [''],
  };

  handleChange = (value: string) => {
    this.setState({ searchMovie: value });
  };
  handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(this.state.searchMovie);
  };

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <SearchField
          handleChange={this.handleChange}
          value={this.state.searchMovie}
        />
        <Button name="search" />
      </form>
    );
  }
}
