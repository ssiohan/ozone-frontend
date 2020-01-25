/* eslint-disable linebreak-style */
// Ici, le container du composant Signin à compléter
import { connect } from 'react-redux';

import Signup from 'src/components/Signup';

// == Import d'action creators
import { changeFieldValue, checkPasswordConfirmation } from 'src/store/reducer/signup';

// == Préparation: data
const mapStateToProps = (state) => ({
  signupEmailValue: state.signup.signupEmail,
  signupUsernameValue: state.signup.signupUsername,
  signupPasswordValue: state.signup.signupPassword,
  signupConfirmPasswordValue: state.signup.signupConfirmPassword,
  passwordNotConfirmed: state.signup.passwordNotConfirmed,
});

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  onSignupFieldChange: (name, value) => {
    // console.log('hello depuis mDTP', name, value);
    dispatch(changeFieldValue(name, value));
  },
  onCheckPasswordConfirmation: () => {
    console.log('hello, je checke la confirmation du mdp');
    dispatch(checkPasswordConfirmation());
  },
});

// == Container
const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

// == Export
export default SignupContainer;
