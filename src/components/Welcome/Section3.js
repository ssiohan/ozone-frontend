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
  left: {
    paddingRight: '5em',
  },
  eventbutton: {
    color: 'white',
    paddingTop: '2em',
  },
}));

// == Composant
const Section3 = () => {
  const classes = useStyles();
  return (
    <Grid container alignContent="center" justify="center" id="section3">
      {/* Left */}
      <Grid className={classes.left} item xs={12} sm={6}>
        <Typography variant="body1" align="left">
        Vous trouverez donc ici toutes sortes d’événements à but écologique et non-lucratifs autour de chez vous ou ailleurs, çà c’est vous qui choisissez !
        </Typography>
        <Typography variant="body1" align="left">
        Pour participer à un événement, il vous suffit de créer un compte en vous enregistrant sur le site, choisir un événement qui vous intéresse et de vous y inscrire !
        </Typography>
        <Typography variant="body1" align="left">
        Vous participez à l’événement et une fois celui-ci terminé, votre compte se voit crédité du nombre de points fixé pour cet événement selon les 4 critères prédéfinis.
        </Typography>
        <Typography variant="body1" align="left">
        Ces points pourront ensuite être utilisés pour acquérir divers articles ou avantages fournis par nos partenaires souhaitant récompenser les participants pour leurs bonnes oeuvres.
        </Typography>
      </Grid>
      {/* Right */}
      <Grid className={classes.right} item xs={12} sm={6}>
        <Grid container alignContent="center" justify="center">
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" align="left">
            Récompensé Pour vos Actes
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
          </Grid>
        </Grid>
        <Grid className={classes.eventbutton} item xs={12} sm={6}>
          <Grid container>
            <Link to="/signup">
              <Button className={classes.button} variant="contained">S'inscrire</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    
  )
};

// == Export
export default Section3;
