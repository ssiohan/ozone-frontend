/* eslint-disable linebreak-style */
// Ici le container du composant login à compléter
import { connect } from 'react-redux';

import Login from 'src/components/Login';

// == Import d'action creators
// à compléter

// == Préparation: data
const mapStateToProps = null;

// == Préparation - actions
const mapDispatchToProps = {};

// == Container
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// == Export
export default LoginContainer;
