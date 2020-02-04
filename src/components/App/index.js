/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';

// == import composants
import Navbar from 'src/containers/Navbar';
// import Banner from 'src/components/Banner';
import Homepage from 'src/containers/Homepage';
import Event from 'src/containers/Event';
import Login from 'src/containers/Login';
import Signup from 'src/containers/Signup';
import CreateEvent from 'src/containers/CreateEvent';
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
    const { logged } = this.props;
    return (
      <div id="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/event/:slug" component={Event} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/create-event">
            <CreateEvent />
          </Route>
          {/* L'utilisateur n'a accès au profil que s'il est connecté */}
          { logged && (
          <Route path="/profile">
            <Profile />
          </Route>
          )}
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    );
  }
}
// == Props par défaut
App.defaultProps = {
  logged: false,
};

// == Validation des props
App.propTypes = {
  logged: PropTypes.bool,
  fetchEvents: PropTypes.func.isRequired,
  fetchToken: PropTypes.func.isRequired,
};
// == Export
export default App;
