/* eslint-disable max-len */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { HashLink as Link } from 'react-router-hash-link';
import Hidden from '@material-ui/core/Hidden';

// == Import : local
import './welcome.scss';

const useStyles = makeStyles(() => ({
  root: {
    margin: '2em auto',
    padding: '1em',
    maxWidth: '1200px',
  },
  button: {
    margin: '1em 0',
    color: '#303944',
    'white-space': 'nowrap',
    '&:hover': {
      backgroundColor: '#203944',
      color: '#fff',
    },
  },
  title: {
    'margin-bottom': '2em',
  },
  paragraph: {
    'margin-bottom': '1em',
  },
  img: {
    width: '100%',
  },
}));

// == Composant
const Partners = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container alignContent="center" justify="center">
      <Grid container spacing={4} className={classes.bg}>
        {/* Left */}
        <Grid className={classes.left} item xs={12} sm={12} md={6}>
          <Grid className={classes.title} item xs={12} sm={12}>
            <Typography variant="h4" align="left">
            Devenir Partenaire
            </Typography>
          </Grid>
          <Grid className={classes.paragraph} item xs={12} sm={12}>
            <Typography variant="body1" align="left">
            Vous voulez cautionner des bonnes actions et GAGNER EN VISIBILITE?
            </Typography>
            <Typography variant="body1" align="left">
            Devenez partenaire en sponsorisant des événements et en mettant à dispositions vos produits pour les ..."trouver un mot"
            </Typography>
            <Typography variant="body1" align="left">
            oZone est un site à but communautaire sur le thème de l’écologie, visant à rassembler des âmes soucieuses de l’état de santé de notre belle planète, de ses habitants…
            </Typography>
            <Typography variant="body1" align="left">
            Changer les mentalités et les comportements de notre espèce vers quelque chose de plus respectueux et social, fait partie des objectifs principaux d’oZone.
            </Typography>
            <Typography variant="body1" align="left">
            Vous trouverez donc ici toutes sortes d’événements à but écologique et non-lucratifs autour de chez vous ou ailleurs, ça c’est vous qui choisissez !
            </Typography>
          </Grid>
        </Grid>
        {/* Right */}
        <Grid className={classes.right} item xs={12} sm={12} md={6}>
          <Grid item xs={12}>
            <Grid container>
              <Link to="events">
                <img className={classes.img} src="src/assets/img/event-preview.png" alt="event" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.eventbutton} item xs={12}>
          <Grid container>
            <Button href="mailto:contact@ozone.best" className={classes.button} variant="contained">Nous contacter</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
};

// == Export
export default Partners;
