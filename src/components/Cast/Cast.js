import React, { Component } from 'react';
import { fetchMovieCredits } from '../../servises/moviesApi';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';
import defaultImg from '../../images/default.jpg';

const imageSrc = 'https://image.tmdb.org/t/p/w500';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchMovieCredits(movieId).then(cast => {
      this.setState({ cast });
    });
  }

  render() {
    return (
      <>
        <ul className={styles.list}>
          {this.state.cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={styles.item}>
              <img
                src={profile_path ? ` ${imageSrc}${profile_path}` : defaultImg}
                alt={name}
                className={styles.imgCard}
              />
              <p className={styles.name}>{name}</p>
              <p className={styles.character}>{character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
  ),
};
export default Cast;
