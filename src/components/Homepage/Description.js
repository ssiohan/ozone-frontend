// == Import : npm
import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// == Import : local
import './homepage.scss';

// == Composant

const useStyles = makeStyles((theme) => ({
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
            <Typography className="description-text">
              Débloquez le meilleur d'oZone.
            </Typography>
            <Typography className="description-text">
              Proposez vos Events sur l'écologie.
            </Typography>
            <Typography className="description-text">
              Inscrivez vous aux events.
            </Typography>
            <Typography className="description-text">
              Recevez des alertes de prix et des events pour agir sur la planete.
            </Typography>
            <Typography className="description-text">
              Gagner des points blablabla lorem
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button href="/signin" className={classes.cardButton} variant="contained">s'inscrire</Button>
          </Grid>
        </Grid>
      </div>
    </Hidden>
  );
}
