import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';
import defaultImg from '../../images/default.jpg';

const imageSrc = 'https://image.tmdb.org/t/p/original';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {movies.map(({ title, id, poster_path, name }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            <img
              className={styles.card}
              src={poster_path ? `${imageSrc}${poster_path}` : defaultImg}
              alt={title}
            />
            <h2 className={styles.cardTitle}>{title || name}</h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
