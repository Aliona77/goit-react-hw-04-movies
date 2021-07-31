import React, { Component } from 'react';
import { fetchMovieCredits } from '../../servises/moviesApi';
import PropTypes from 'prop-types';

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
        <ul>
          {this.state.cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
              <p>{character}</p>
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

// import React, { Component } from 'react';
// import axios from 'axios';

// class Casts extends Component {
//   state = {
//     actors: [],
//   };

// async componentDidMount ()  {
//   const response  = await axios.get(
//       'https://api.themoviedb.org/3/trending/all/day?api_key=f5a3937924711066fc534c3e8274ae15',
//   )
//   const results = await response.data.cast
//   //console.log(results)

//   this.setState({actors: results})
//   }

//   render() {
//     return (
//       <>
//         <h1>Casts</h1>
//         <ul>
//           {this.state.cast.map(actor => (
//             <li key={actor.id}>{actor.title}</li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default Casts;
