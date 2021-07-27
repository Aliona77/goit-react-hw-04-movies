import React, { Component } from 'react';
import axios from 'axios';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://developers.themoviedb.org/3/search/search-movies',
    );
    console.log(response.data);
  }

  render() {
    return <h1>Movies</h1>;
  }
}

export default MoviesPage;
