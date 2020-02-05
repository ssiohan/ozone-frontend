// == Import : npm
import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from 'src/components/Homepage/Slider';
import Divider from '@material-ui/core/Divider';
import CheckboxEvent from 'src/containers/CheckboxEvent';
import CheckboxLevel from 'src/components/Homepage/CheckboxLevel';

// == Import : local
import './homepage.scss';
import { Typography } from '@material-ui/core';

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
    'background-color': '#526DDB',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#626DDB',
      color: '#fff',
    },
  },
  divider: {
    height: '3px',
    'margin-top': '1em',
    'margin-bottom': '1em',
  },
  slider: {
    'max-width': '80%',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <Hidden only={['xs', 'sm']}>
      <Grid className="description" container spacing={1}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h5" align="left">
              Rayon:
              </Typography>
              <Typography variant="subtitle2" align="left">
              en km:
              </Typography>
            </Grid>
            <Grid className={classes.slider} item xs={12} sm={12}>
              <Slider />
              <Divider className={classes.divider} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h5" align="left">
              Filtrer par:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxEvent />
              <Divider className={classes.divider} />
              <CheckboxLevel />
              <Divider className={classes.divider} />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Hidden>
  );
}
