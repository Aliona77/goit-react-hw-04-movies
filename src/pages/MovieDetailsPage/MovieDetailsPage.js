import React, { Component } from 'react';
import { fetchMovieDetails } from '../../servises/moviesApi';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import { NavLink, Route } from 'react-router-dom';

class MovieDetailsPage extends Component {
  state = {
    overview: null,
    genres: [],
    id: null,
    title: null,
    vote_average: null,
    poster_path: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovieDetails(movieId).then(movies => {
      this.setState({ ...movies });
    });
  }

  clickGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(`/`);
  };

  render() {
    const { match } = this.props;
    const { title, poster_path, overview, vote_average } = this.state;
    return (
      <>
        <button type="button" onClick={this.clickGoBack}>
          Go Back
        </button>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        <h2>{title}</h2>
        <p>{overview}</p>
        <p>User score: {vote_average}</p>
        <h3>Genres</h3>

        <ul>
          <li>
            <NavLink to={`${match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>

        <Route exact path={`${match.path}/cast`} component={Cast} />
        <Route exact path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
