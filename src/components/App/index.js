/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';

// == import composants
import Navbar from 'src/components/Navbar';
// import Banner from 'src/components/Banner';
import Homepage from 'src/containers/Homepage';
import Event from 'src/components/Event';
import Login from 'src/containers/Login';
import Signup from 'src/containers/Signup';
import CreateEvent from 'src/components/CreateEvent';
import Profile from 'src/components/Profile';
import Sponsors from 'src/components/Sponsors';
import About from 'src/components/About';


// == Composant
const App = ({ logged }) => (
  <div id="app">
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/event">
        <Event />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/create-event">
        <CreateEvent />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/sponsors">
        <Sponsors />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
    {/* Si le user est connecté: redirection de login vers homepage */}
    {logged && <Redirect from="login" to="/" />}
  </div>
);
// == Props par défaut
App.defaultProps = {
  logged: false,
};

// == Validation des props
App.propTypes = {
  logged: PropTypes.bool,
};
// == Export
export default App;
