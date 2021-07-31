import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundMovies from './pages/NotFoundMovies';
import Container from './components/Container/Container';
import Spinner from './components/Spiner/Spiner';

const App = () => (
  <Container>
    <Suspense fallback={<Spinner />}>
      <AppBar />

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
