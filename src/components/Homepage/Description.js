// == Import : npm
import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


// == Import : local
import './description.scss';

// == Composant

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardButton: {
    'background-color': '#078171',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#196A75',
      color: '#fff',
    },
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <Hidden only={['xs', 'sm']}>
      <div className={classes.root}>
        <Grid className="description" container spacing={1}>
          <Grid item xs={12} sm={12}>
            <img className="description-logo" src="src/assets/img/logo_sans_fond.png" alt="" />
          </Grid>
          <Grid item xs={12} sm={12}>
            <p className="description-text">
              Débloquez le meilleur d'oZone.
            </p>
            <p className="description-text">
              Proposez vos Events sur l'écologie.
            </p>
            <p className="description-text">
              Inscrivez vous aux events.
            </p>
            <p className="description-text">
              Recevez des alertes de prix et des events pour agir sur la planete.
            </p>
            <p className="description-text">
              Gagner des points blablabla lorem
            </p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button className={classes.cardButton} variant="contained">s'inscrire</Button>
          </Grid>
        </Grid>
      </div>
    </Hidden>
  );
}
