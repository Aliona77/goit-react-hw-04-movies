// import { useState, useEffect } from 'react';
// import * as movieTrandingApi from '../../servises/moviesApi';
// import PageHeading from '../../components/PageHeading/PageHeading';

// export default function HomePage() {
//   const [movies, setMovies] = useState(null);

//   useEffect(() => {
//     movieTrandingApi.fetchMovieTrending().then(setMovies);

//   }, []);

//   return (
//     <>
//       <PageHeading text="Tranding movies"/>

//         {movies && (
//         <ul>
//           {movies.map(movie => (
//             <li key={movie.id}>{movie.title}</li>
//           ))}
//         </ul>
//         )}
//     </>
//   );
// }

import { Component } from 'react';
import axios from 'axios';
import PageHeading from '../../components/PageHeading/PageHeading';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=f5a3937924711066fc534c3e8274ae15',
    );
    const results = await response.data.results;
    console.log(results);

    this.setState({ movies: results });
  }

  render() {
    return (
      <>
        <PageHeading text="Tranding movies" />
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>{movie.location}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
