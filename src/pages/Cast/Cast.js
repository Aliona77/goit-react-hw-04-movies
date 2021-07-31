const Casts = () => {
  return <h1>Casts</h1>;
};
export default Casts;

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
