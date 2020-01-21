// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


// == Import : local
import './login.scss';

// == Import : sous-composants
import Banner from 'src/components/Banner';
import LoginForm from './LoginForm';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  form: {
    maxWidth: 600,
  },
}));

// == Composant
const Login = () => {
  const classes = useStyles();
  return (
    <div id="login">
      <Grid container direction="column">
        <Banner />
        <Grid item>
          <Typography variant="h1" gutterBottom>
             Connexion
          </Typography>
        </Grid>
        <Grid item>
          <Avatar>
            <PersonOutlineTwoToneIcon fontSize="large" />
          </Avatar>
        </Grid>
        <Grid item>
          <LoginForm />
        </Grid>
      </Grid>
    </div>
  );
};

// == Export
export default Login;
