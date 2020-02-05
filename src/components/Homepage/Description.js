// == Import : npm
import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


// == Import : local
import './homepage.scss';

// == Composant

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'background-image': 'url("src/assets/img/sidebar.jpg")',
    borderRadius: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardButton: {
    'background-color': '#303944',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#203944',
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
            <Link to="/signup">
              <Button className={classes.cardButton} variant="contained">s'inscrire</Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Hidden>
  );
}
