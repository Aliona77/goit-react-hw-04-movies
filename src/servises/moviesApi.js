import axios from 'axios';

const BASE_URl = 'https://api.themoviedb.org/3';
const KEY = 'f5a3937924711066fc534c3e8274ae15';

export const fetchMovieTrending = async () => {
  const { data } = await axios.get(
    `${BASE_URl}/trending/all/day?api_key=${KEY}`,
  );

  return data.results;
};

export const fetchMovieSearch = async query => {
  return axios
    .get(
      `${BASE_URl}/search/movie?&query=${query}&api_key=${KEY}&language=en-US&include_adult=false`,
    )
    .then(response => response.data.results);
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URl}/movie/${movieId}?api_key=${KEY}&language=en-US`,
  );
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `${BASE_URl}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  );
  return response.data.cast;
};
export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URl}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
  return response.data.results;
};
