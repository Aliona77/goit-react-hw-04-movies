import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchMovieSearch } from '../servises/moviesApi';
import MovieList from '../components/MovieList/MovieList';

class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
  };

  onSearchQuery = query => {
    this.setState({ error: null });
    fetchMovieSearch(query)
      .then(movies => {
        this.setState({ movies });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSearchQuery} />
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

MoviesPage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
export default MoviesPage;
