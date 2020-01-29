/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';

// == import composants
import Navbar from 'src/containers/Navbar';
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
class App extends React.Component {
  componentDidMount() {
    // appel à l'API pour initialiser les données
    const { fetchEvents, fetchToken } = this.props;
    // App vérifie la présence d'un token dans localStorage
    // En cas de présence d'un token => logged: true
    fetchToken();
    // Récupération des events dans l'API
    fetchEvents();
  }

  render() {
    const { logged, registered } = this.props;
    return (
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
        {/* Si le user est inscrit avec succès redirection de signup vers login */}
        {registered && <Redirect from="signup" to="login" />}
      </div>
    );
  }
}
// == Props par défaut
App.defaultProps = {
  logged: false,
  registered: false,
};

// == Validation des props
App.propTypes = {
  logged: PropTypes.bool,
  registered: PropTypes.bool,
  fetchEvents: PropTypes.func.isRequired,
  fetchToken: PropTypes.func.isRequired,
};
// == Export
export default App;
