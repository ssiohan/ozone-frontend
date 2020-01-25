/* eslint-disable linebreak-style */
// Ici, le container du composant Signin à compléter
import { connect } from 'react-redux';

import Signup from 'src/components/Signup';

// == Import d'action creators
import { changeFieldValue } from 'src/store/reducer/signup';

// == Préparation: data
const mapStateToProps = (state) => ({
  signupEmailValue: state.signupEmail,
  signupUsernameValue: state.signupUsername,
  signupPasswordValue: state.signupPassword,
  signupConfirmPasswordValue: state.signupConfirmPassword,
});

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  onSignupFieldChange: (name, value) => {
    // console.log('hello depuis mDTP', name, value);
    dispatch(changeFieldValue(name, value));
  },
});

// == Container
const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

// == Export
export default SignupContainer;
