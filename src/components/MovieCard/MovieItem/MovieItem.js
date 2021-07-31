import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieItem.module.css';

const MovieItem = ({ movies, location }) => {
  return movies.map(movie => (
    <li key={movie.id} className={styles.item}>
      <Link
        to={{
          pathname: `movies/$(movie.id)`,
          state: {
            from: location,
          },
        }}
      >
        {movie.title}
      </Link>
    </li>
  ));
};

MovieItem.proptypes = {};
