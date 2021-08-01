import React, { Component } from 'react';
import PageHeading from '../components/PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { fetchMovieTrending } from '../servises/moviesApi';
import styles from '../components/MovieList/MovieList.module.css';
//import Spinner from '../components/Spiner/Spiner';

const imageSrc = 'https://image.tmdb.org/t/p/w500';

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    fetchMovieTrending().then(movies => {
      this.setState({ movies });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <PageHeading text="Trending today" />
        <div>
          <ul className={styles.list}>
            {movies.map(({ id, poster_path, title, name }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>
                  <img
                    className={styles.card}
                    src={`${imageSrc}${poster_path}`}
                    alt={title}
                  />
                  <h2 className={styles.cardTitle}>{title || name}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default HomePage;
