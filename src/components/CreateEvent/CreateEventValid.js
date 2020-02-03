/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';


// == Import : local
import './createEvent.scss';
import { Typography } from '@material-ui/core';

// == Import : sous-composants

// == Style du composant
const useStyles = makeStyles(() => ({

  root: {
    margin: 'auto',
  },
  whitebox: {
    background: '#fff',
    padding: '1em',
    margin: '.3em',
    height: 300,
    width: '980px',
  },
  titletxt: {
    margin: '.5em',

  },
  text: {
    margin: ' 2em 0 2em 0',
  },
  button: {

    'background-color': '#526DDB',
    color: '#fff',
    'white-space': 'nowrap',
    margin: '2em 0',
    '&:hover': {
      backgroundColor: '#626DDB',
      color: '#fff',
    },
  },
}));


// == Composant
const CreateEventValid = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid>
        <Typography className={classes.titletxt} variant="h4">Créer un événement</Typography>
        <Grid className={classes.whitebox}>
          <Grid container justify="center">
            <Alert severity="success">
              <AlertTitle >FÉLICITATIONS!</AlertTitle>
              votre événement: {title} a bien été crée!
            </Alert>
          </Grid>
          <Typography className={classes.text}>Vous pouvez à présent revenir sur la page d'accueil en cliquant sur le lien ci-dessous</Typography>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="default"
              size="large"
              className={classes.button}
              href="/"
            >
            Accueil
            </Button>
          </Grid>
        </Grid>


      </Grid>
    </Grid>
  );
};
// == Validation des props
CreateEventValid.propTypes = {

  title: PropTypes.string.isRequired,
};

// == Export
export default CreateEventValid;
