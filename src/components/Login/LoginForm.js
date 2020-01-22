/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
const LoginForm = () => {
  const classes = useStyles();
  // Fonction qui permet de récupérer les données saisies par le user
  const handleLoginInputChange = (evt) => {
    const fieldName = evt.target.name;
    const fieldValue = evt.target.value;
    console.log(fieldName, fieldValue);
  };
  // Fonction qui permet de gérer la soumission du formulaire
  const handleLoginFormSubmit = (evt) => {
    evt.preventDefault();
    console.log('login form submitted');
  };
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleLoginFormSubmit}
    >
      <Grid
        container
        direction="column"
        justify="center"
      >
        <Grid item>
          <TextField
            id="login-email"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            onChange={handleLoginInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="login-password"
            label="Mot de passe"
            variant="outlined"
            type="password"
            name="password"
            onChange={handleLoginInputChange}
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
        Me connecter
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

// == Export
export default LoginForm;
