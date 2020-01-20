// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// == Import : local
import './event.scss';

// == Import : sous-composants
// import MapLink from './MapLink';
// import EventAddress from './EventAddress';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  event_footer: {
    padding: theme.spacing(2),
  },
  image: {
    maxWidth: 400,
    maxHeight: 400,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

// == Composant
const EventFooter = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-evenly"
      className={classes.event_footer}
    >
      <Grid item xs={12} md={4}>
          Gauche
      </Grid>
      <Grid item xs={12} md={4}>
          Milieu
      </Grid>
      <Grid item xs={12} md={4}>
          Droite
      </Grid>
    </Grid>
  );
};

// == Export
export default EventFooter;
