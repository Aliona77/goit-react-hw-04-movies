import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PageHeading from '../../components/PageHeading/PageHeading';
import * as movieDetailsApi from '../../servises/moviesApi';

export default function MovieDetailsPage() {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieDetailsApi.fetchMovieDetails(movie_id).then(setMovie);
  }, [movie_id]);

  return (
    <>
      <PageHeading text={`Movie ${movie_id}`} />

      {movie && (
        <>
          <img src={movie.imgUrl} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.descr}</p>
        </>
      )}
    </>
  );
}
