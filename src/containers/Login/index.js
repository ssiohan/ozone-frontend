/* eslint-disable linebreak-style */
// Ici le container du composant login à compléter
import { connect } from 'react-redux';

import Login from 'src/components/Login';

// == Import d'action creators
import { changeFieldValue } from 'src/store/reducer/login';

// == Préparation: data
const mapStateToProps = (state) => ({
  emailValue: state.email,
  passwordValue: state.password,
});

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (value, name) => {
    console.log('hello depuis mDTP', value, name);
    dispatch(changeFieldValue(value, name));
  },
});

// == Container
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// == Export
export default LoginContainer;
