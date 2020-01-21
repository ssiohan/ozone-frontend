// == Import : npm
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
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
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="login-email"
        label="Email"
        variant="outlined"
        type="email"
      />
      <TextField
        id="login-password"
        label="Mot de passe"
        variant="outlined"
        type="password"
      />
      <Button
        variant="contained"
        color="default"
        size="large"
        className={classes.button}
      >
        Me connecter
      </Button>
    </form>
  );
};

// == Export
export default LoginForm;
