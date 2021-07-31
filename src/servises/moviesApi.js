import axios from 'axios';

const BASE_URl = 'https://api.themoviedb.org/3';
const KEY = 'f5a3937924711066fc534c3e8274ae15';

export const fetchMovieTrending = async page => {
  const response = await axios.get(
    `${BASE_URl}/trending/all/day?api_key=${KEY}&page=${page}`,
  );
  const results = await response.data.results;
  console.log(results);
  return results;
};

export const fetchMovieSearch = async (movie, page) => {
  const response = await axios.get(
    `${BASE_URl}/search/movie?api_key=${KEY}&language=en-US&page=${page}&query=${movie}&include_adult=false`,
  );
  const results = await response.data;

  return results;
};
export const fetchMovieDetails = async movie_id => {
  const response = await axios.get(
    `${BASE_URl}/movie/${movie_id}?api_key=${KEY}&language=en-US`,
  );
  const results = await response.data;

  return results;
};
export const fetchMovieCredits = async movie_id => {
  const response = await axios.get(
    `${BASE_URl}/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`,
  );
  const results = await response.data.cast;

  return results;
};
export const fetchMovieReviews = async movie_id => {
  const response = await axios.get(
    `${BASE_URl}/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
  const results = await response.data.results;

  return results;
};
