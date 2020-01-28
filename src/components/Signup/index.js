/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FaRegUserCircle } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


// == Import : local
import './signup.scss';

// == Import : sous-composants
import Banner from 'src/components/Banner';
import SignupForm from './SignupForm';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  icon: {
    marginBottom: theme.spacing(1),
  },
}));


// == Composant
const Signup = (
  {
    onSignupFieldChange,
    signupEmailValue,
    signupUsernameValue,
    signupPasswordValue,
    signupConfirmPasswordValue,
    passwordNotConfirmed,
    onCheckPasswordConfirmation,
    emptyFieldsCounter,
    onCheckForEmptyFields,
  },
) => {
  const classes = useStyles();
  return (
    <div id="signup">
      <Banner />
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.root}
      >
        <Grid item>
          <Typography variant="h1" gutterBottom xs={12}>
             Inscription
          </Typography>
        </Grid>
        <Grid item className={classes.icon}>
          <FaRegUserCircle size={70} xs={12} />
        </Grid>
        <Grid item>
          <SignupForm
            onSignupFieldChange={onSignupFieldChange}
            signupEmailValue={signupEmailValue}
            signupUsernameValue={signupUsernameValue}
            signupPasswordValue={signupPasswordValue}
            signupConfirmPasswordValue={signupConfirmPasswordValue}
            onCheckPasswordConfirmation={onCheckPasswordConfirmation}
            passwordNotConfirmed={passwordNotConfirmed}
            emptyFieldsCounter={emptyFieldsCounter}
            onCheckForEmptyFields={onCheckForEmptyFields}
          />
        </Grid>
      </Grid>
    </div>
  );
};
// == Props par défault
Signup.defaultProps = {
  signupEmailValue: '',
  signupUsernameValue: '',
  signupPasswordValue: '',
  signupConfirmPasswordValue: '',
  passwordNotConfirmed: false,
  emptyFieldsCounter: 0,
};
//= = Validation des props
Signup.propTypes = {
  onSignupFieldChange: PropTypes.func.isRequired,
  signupEmailValue: PropTypes.string,
  signupUsernameValue: PropTypes.string,
  signupPasswordValue: PropTypes.string,
  signupConfirmPasswordValue: PropTypes.string,
  onCheckPasswordConfirmation: PropTypes.func.isRequired,
  passwordNotConfirmed: PropTypes.bool,
  emptyFieldsCounter: PropTypes.number,
  onCheckForEmptyFields: PropTypes.func.isRequired,
};

// == Export
export default Signup;
