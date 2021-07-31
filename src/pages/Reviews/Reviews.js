import React, { Component } from 'react';
import { fetchMovieReviews } from '../../servises/moviesApi';

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
            <li keu={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Reviews;
