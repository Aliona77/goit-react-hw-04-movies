import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundMovies from './pages/NotFoundMovies/NotFoundMovies';
import Container from './components/Container/Container';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundMovies />
        </Route>
      </Switch>
    </Container>
  );
}
