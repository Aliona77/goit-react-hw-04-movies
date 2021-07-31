import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundMovies from './pages/NotFoundMovies/NotFoundMovies';
import Container from './components/Container/Container';
import Spiner from './components/Spiner/Spiner';

const App = () => (
  <Container>
    <AppBar />
    <Suspense fallback={<Spiner />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundMovies} />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
