/* eslint-disable linebreak-style */
// Ici le container du composant login à compléter
import { connect } from 'react-redux';

import Login from 'src/components/Login';

// == Import d'action creators
import { changeLoginFieldValue, checkForEmptyLoginFields, doLogin } from 'src/store/reducer/login';

// == Préparation: data
const mapStateToProps = (state) => ({
  emailValue: state.login.email,
  passwordValue: state.login.password,
  emptyLoginFieldsCounter: state.login.emptyLoginFields,
  loginStatus: state.login.logged,
});

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  onLoginFieldChange: (name, value) => {
    // console.log('hello depuis mDTP', name, value);
    dispatch(changeLoginFieldValue(name, value));
  },
  onCheckForEmptyLoginFields: () => {
    // console.log('hello depuis mDtP, je check les champs vides');
    dispatch(checkForEmptyLoginFields());
  },
  getLoggedIn: () => {
    // console.log('hello depuis mDtp, je vais connecter le user');
    dispatch(doLogin());
  },
});

// == Container
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// == Export
export default LoginContainer;
