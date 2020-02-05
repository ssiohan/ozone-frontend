// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// == Import : local
import './welcome.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  eventbutton: {
    color: 'white',
    paddingTop: '2em',
  },
  button: {
    // color: 'white',

  },
}));

// == Composant
const Section2 = () => {
  const classes = useStyles();
  return (
    <Grid container alignContent="center" justify="center" id="section2">
    {/* Left */}
      <Grid item xs={12} sm={6}>
        <Grid container alignContent="center" justify="center">
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" align="left">
            Des événements écologiques
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" align="left">
            Près de chez vous
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.eventbutton} item xs={12} sm={6}>
          <Grid container>
            <Link to="/events">
              <Button className={classes.button} variant="contained">Voir les événements</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      {/* Right */}
      <Grid item xs={12} sm={6}>
        <Typography variant="body1" align="left">
        oZone est un site à but communautaire sur le thème de l’écologie, visant à rassembler des âmes soucieuses de l’état de santé de notre belle planète, de ses habitants…
        </Typography>
        <Typography variant="body1" align="left">
        Changer les mentalités et les comportements de notre espèce vers quelque chose de plus respectueux et social, fait partie des objectifs principaux d’oZone.
        </Typography>
        <Typography variant="body1" align="left">
        Vous trouverez donc ici toutes sortes d’événements à but écologique et non-lucratifs autour de chez vous ou ailleurs, çà c’est vous qui choisissez !
        </Typography>
      </Grid>
    </Grid>
    
  )
};

// == Export
export default Section2;
