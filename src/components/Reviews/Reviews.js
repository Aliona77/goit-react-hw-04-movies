import React, { Component } from 'react';
import { fetchMovieReviews } from '../../servises/moviesApi';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchMovieReviews(movieId).then(reviews => {
      this.setState({ reviews });
    });
  }
  render() {
    return (
      <>
        <ul>
          {this.state.reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3 className={styles.title}>Author: {author}</h3>
              <p className={styles.text}>{content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Reviews;
