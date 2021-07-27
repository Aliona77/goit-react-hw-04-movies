import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import NotFoundMovies from './components/NotFoundMovies/NotFoundMovies';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink
          to="tranding"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          MoviesDetails
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/tranding" component={MovieDetailsPage} />
      <Route component={NotFoundMovies} />
    </Switch>
  </>
);
export default App;
