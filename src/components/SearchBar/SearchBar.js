import React, { Component } from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  state = { query: '' };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <button className={styles.button} type="submit">
          <span></span>
        </button>

        <input
          className={styles.input}
          value={this.state.query}
          onChange={this.handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>
    );
  }
}

export default SearchBar;
