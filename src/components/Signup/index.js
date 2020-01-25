// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FaRegUserCircle } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
}));


// == Composant
const Signup = () => {
  const classes = useStyles();
  return (
    <div id="signup">
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.root}
      >
        <Grid item>
          <Banner />
        </Grid>
        <Grid item>
          <Typography variant="h1" gutterBottom xs={12}>
             Inscription
          </Typography>
        </Grid>
        <Grid item>
          <FaRegUserCircle size={70} xs={12} />
        </Grid>
        <Grid item>
          <SignupForm />
        </Grid>
      </Grid>
    </div>
  );
};

// == Export
export default Signup;
