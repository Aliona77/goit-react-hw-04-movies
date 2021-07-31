import React, { Component } from 'react';
//import axios from 'axios';
import PageHeading from '../../components/PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { fetchMovieTrending } from '../../servises/moviesApi';

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
        <PageHeading text="Tranding today" />
        <div>
          <ul>
            {movies.map(({ id, poster_path, title, name }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>
                  <img src={`${imageSrc}${poster_path}`} alt={title} />
                  <h2>{title || name}</h2>
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

// class HomePage extends Component {
//   state = {
//     movies: [],
//   };

//   async componentDidMount() {
//     const response = await axios.get(
//       'https://api.themoviedb.org/3/trending/all/day?api_key=f5a3937924711066fc534c3e8274ae15',
//     );
//     const results = await response.data.results;
//     console.log(results);

//     this.setState({ movies: results });
//   }

//   render() {
//    //console.log(this.props.match.url);

//     return (
//       <>
//         <PageHeading text="Tranding today" />
//         <ul>
//           {this.state.movies.map(movie => (
//             <li key={movie.id}>
//               <Link to={`${this.props.match.url}/${movie.id}`}>
//                 {movie.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default HomePage;
