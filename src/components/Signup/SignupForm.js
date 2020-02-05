/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 350,
      minWidth: 300,
      border: 'solid 1px #E0E0E0',
      borderRadius: '5px',
    },
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#526DDB',
    color: '#F2F2F2',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#626DDB',
      color: '#fff',
    },
  },
  emptyFieldsMessage: {
    color: '#EA282A',
    fontSize: 'x-small',
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
    passwordNotConfirmed,
    onCheckPasswordConfirmation,
    emptyFieldsCounter,
    onCheckForEmptyFields,
    getSignedUp,
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
  // Fonction qui gère la confirmation du mot de passe
  const handlePasswordConfirmation = () => {
    // console.log('focus out', evt.target.name);
    // console.log(passwordNotConfirmed);
    onCheckPasswordConfirmation();
  };

  // Fonction qui gère la soumission du formulaire
  const handleSignupFormSubmit = (evt) => {
    evt.preventDefault();
    // console.log('sign up form submitted');
    onCheckForEmptyFields();
    getSignedUp();
  };
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSignupFormSubmit}
    >
      <Grid
        container
        direction="column"
        justify="center"
      >
        {/* Message d'erreur en cas de champs non remplis à la soumission */}
        {emptyFieldsCounter > 0 && (
        <Grid item>
          <Typography
            variant="h5"
            gutterBottom
            xs={12}
            className={classes.emptyFieldsMessage}
          >
             Tous les champs doivent être remplis.
          </Typography>
        </Grid>
        )}
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
            onBlur={handlePasswordConfirmation}
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
            onBlur={handlePasswordConfirmation}
            // Vérification de la confirmation du mot de passe
            error={passwordNotConfirmed && true}
            helperText={passwordNotConfirmed && 'Les mots de passe saisis ne sont pas identiques'}
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
// == Props par défault
SignupForm.defaultProps = {
  signupEmailValue: '',
  signupUsernameValue: '',
  signupPasswordValue: '',
  signupConfirmPasswordValue: '',
  passwordNotConfirmed: false,
  emptyFieldsCounter: 0,
};

// == Validation des props
SignupForm.propTypes = {
  onSignupFieldChange: PropTypes.func.isRequired,
  signupEmailValue: PropTypes.string,
  signupUsernameValue: PropTypes.string,
  signupPasswordValue: PropTypes.string,
  signupConfirmPasswordValue: PropTypes.string,
  onCheckPasswordConfirmation: PropTypes.func.isRequired,
  passwordNotConfirmed: PropTypes.bool,
  emptyFieldsCounter: PropTypes.number,
  onCheckForEmptyFields: PropTypes.func.isRequired,
  getSignedUp: PropTypes.func.isRequired,

};

// == Export
export default SignupForm;
