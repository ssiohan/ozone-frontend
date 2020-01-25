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
const SignupForm = () => {
  const classes = useStyles();
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
          />
        </Grid>
        <Grid item>
          <TextField
            id="signup-username"
            label="Pseudo"
            variant="outlined"
            type="text"
          />
        </Grid>
        <Grid item>
          <TextField
            id="signup-password"
            label="Mot de passe"
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item>
          <TextField
            id="signup-password-confirm"
            label="Confirmez votre mot de passe"
            variant="outlined"
            type="password"
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

// == Export
export default SignupForm;
