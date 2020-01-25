// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
      minWidth: 300,
      border: 'solid 1px #E0E0E0',
    },
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#078171',
    color: '#F2F2F2',
    fontWeight: 'bold',
  },
}));

// == Composant
const SignupForm = (
  {
    onSignupFieldChange,
    signupEmailValue,
    signupUsernameValue,
    signupPasswordValue,
    signupConfirmPasswordValue,
  },
) => {
  const classes = useStyles();
  // Fonction qui gère la saisie dans les champs du formulaire
  const handleSignupInputChange = (evt) => {
    const fieldValue = evt.target.value;
    const fieldName = evt.target.name;
    // console.log(fieldValue, fieldName);
    onSignupFieldChange(fieldName, fieldValue);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid
        container
        direction="column"
        justify="center"
      >
        <Grid item>
          <TextField
            id="signup-email"
            label="Email"
            variant="outlined"
            type="email"
            name="signupEmail"
            value={signupEmailValue}
            onChange={handleSignupInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="signup-username"
            label="Pseudo"
            variant="outlined"
            type="text"
            name="signupUsername"
            value={signupUsernameValue}
            onChange={handleSignupInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="signup-password"
            label="Mot de passe"
            variant="outlined"
            type="password"
            name="signupPassword"
            value={signupPasswordValue}
            onChange={handleSignupInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="signup-password-confirm"
            label="Confirmez votre mot de passe"
            variant="outlined"
            type="password"
            name="signupConfirmPassword"
            value={signupConfirmPasswordValue}
            onChange={handleSignupInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            type="submit"
            color="default"
            size="large"
            className={classes.button}
          >
        Inscription
          </Button>
        </Grid>
      </Grid>
    </form>

  );
};

//= = Validation des props
SignupForm.propTypes = {
  onSignupFieldChange: PropTypes.func.isRequired,
  signupEmailValue: PropTypes.string,
  signupUsernameValue: PropTypes.string,
  signupPasswordValue: PropTypes.string,
  signupConfirmPasswordValue: PropTypes.string,
};

// == Export
export default SignupForm;
