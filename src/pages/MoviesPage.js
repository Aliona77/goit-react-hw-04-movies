import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchMovieSearch } from '../servises/moviesApi';
import MovieList from '../components/MovieList/MovieList';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };
  componentDidMount() {
    const { location } = this.props;
    const searchParams = new URLSearchParams(location.search);

    const query = searchParams.has('query') ? searchParams.get('query') : null;

    if (query) {
      this.setState({ query });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.onSearchQuery();
    }
  }
  onSearchQuery = () => {
    const { query } = this.state;
    fetchMovieSearch(query).then(movies => {
      this.setState({ query: query, movies: movies });
    });
  };
  onChangeQuery = seachQuery => {
    this.setState({
      query: seachQuery,
    });

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${seachQuery}`,
    });
  };
  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        {movies && <MovieList movies={movies} />}
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
