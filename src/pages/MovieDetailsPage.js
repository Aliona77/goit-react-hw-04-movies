import React, { Component } from 'react';
import { fetchMovieDetails } from '../servises/moviesApi';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import { NavLink, Route } from 'react-router-dom';
import styles from '../components/MovieList/MovieList.module.css';

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
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
            <NavLink className={styles.navLink} to={`${match.url}/cast`}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navLink} to={`${match.url}/reviews`}>
              Reviews
            </NavLink>
          </li>
        </ul>

        <Route exact path={`${match.path}/cast`} component={Cast} />
        <Route exact path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
