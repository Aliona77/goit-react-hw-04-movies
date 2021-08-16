import React, { Component } from 'react';
import { fetchMovieDetails } from '../servises/moviesApi';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import { NavLink, Route } from 'react-router-dom';
import styles from '../components/MovieList/MovieList.module.css';
import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    overview: null,
    genres: [],
    id: null,
    title: null,
    vote_average: null,
    poster_path: null,
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    fetchMovieDetails(movieId).then(data => {
      this.setState({ ...data });
    });
  }

  clickGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { match, location } = this.props;
    const { title, poster_path, overview, vote_average, genres } = this.state;
    return (
      <>
        <button
          className={styles.buttonBack}
          type="button"
          onClick={this.clickGoBack}
        >
          Go Back
        </button>
        <img
          className={styles.card}
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt=""
        />
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.text}>{overview}</p>
        <p className={styles.titleInfo}> User score: {vote_average}</p>
        <h3 className={styles.cardTitle}>Genres</h3>
        <p className={styles.text}>
          {genres.map(({ name }) => (
            <span key={name}>{name}</span>
          ))}
        </p>
        <p className={styles.titleInfo}>Additional information</p>
        <ul>
          <li>
            <NavLink
              className={styles.navLink}
              to={{
                pathname: `${match.url}${routes.cast}`,
                state: { from: location.state },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navLink}
              to={{
                pathname: `${match.url}${routes.reviews}`,
                state: {
                  from: location.state,
                },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Route exact path={`${match.path}${routes.cast}`} component={Cast} />
        <Route
          exact
          path={`${match.path}${routes.reviews}`}
          component={Reviews}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
