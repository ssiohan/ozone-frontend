/* eslint-disable linebreak-style */
// Ici le container du composant login à compléter
import { connect } from 'react-redux';

import App from 'src/components/App';

// == Import d'action creators


// == Préparation: data
const mapStateToProps = (state) => ({
  logged: state.login.logged,
});

// == Préparation - actions
const mapDispatchToProps = {};

// == Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
