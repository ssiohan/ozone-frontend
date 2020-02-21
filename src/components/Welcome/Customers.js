/* eslint-disable max-len */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// == Import : local
import './welcome.scss';

const useStyles = makeStyles(() => ({
  root: {
    margin: '2em auto',
    padding: '1em',
    maxWidth: '1200px',
  },
  img: {
    width: '100%',
  },
  title: {
    'margin-bottom': '2em',
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
  paragraph: {
    'margin-bottom': '1em',
  },
}));

// == Composant
const Customers = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container alignContent="center" justify="center">
      {/* Left */}
      <Grid item xs={12} sm={12} md={6}>
        <Grid container direction="column" justify="space-between">
          <Grid className={classes.title} item>
            <Grid item xs={12} sm={12}>
              <Typography variant="h4" align="left">Des événements écologiques</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h4" align="left">Près de chez vous</Typography>
            </Grid>
          </Grid>
          <Grid className={classes.paragraph} item>
            <Typography variant="body1" align="left">
            Pour participer à un événement, il vous suffit de créer un compte en vous enregistrant sur le site, choisir un événement qui vous intéresse et de vous y inscrire !
            </Typography>
            <Typography variant="body1" align="left">
            Vous participez à l’événement et une fois celui-ci terminé, votre compte se voit crédité du nombre de points fixé pour cet événement selon les 4 critères prédéfinis.
            </Typography>
            <Typography variant="h6" align="left">
            Vous êtes récompensé pour vos Actes!
            </Typography>
            <Typography variant="body1" align="left">
            Ces points pourront ensuite être utilisés pour acquérir divers articles ou avantages fournis par nos partenaires souhaitant récompenser les participants pour leurs bonnes oeuvres.
            </Typography>
          </Grid>
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
          <Link to="/events">
            <Button className={classes.button} variant="contained">Voir les événements</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
};

// == Export
export default Customers;
