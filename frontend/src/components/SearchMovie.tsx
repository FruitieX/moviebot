import * as React from 'react'
import { SearchField } from './SearchField'
import { Button } from './Button'

export class SearchMovie extends React.Component {
  state = {
    searchMovie: '',
    resultMovies: [''],
  }

  handleChange = (value: string) => {
    this.setState({ searchMovie: value })
  }
  handleSearch = () => {
    alert(this.state.searchMovie)
  }

  render() {
    return (
      <>
        <SearchField
          handleChange={this.handleChange}
          value={this.state.searchMovie}
        />
        <Button name="search" onClick={this.handleSearch} />
      </>
    )
  }
}
