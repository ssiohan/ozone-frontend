/* eslint-disable linebreak-style */
// Ici, le container du composant Signin à compléter
import { connect } from 'react-redux';

import Signin from 'src/components/Signin';

// == Import d'action creators
// à compléter

// == Préparation: data
const mapStateToProps = null;

// == Préparation - actions
const mapDispatchToProps = {};

// == Container
const SigninContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);

// == Export
export default SigninContainer;
