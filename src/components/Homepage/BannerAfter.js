// == Import : npm
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


// == Import : local
import './homepage.scss';


// == Import : Components
import SearchBarMaps from 'src/components/Homepage/SearchBarMaps';

// == Add Css style with Material UI
const useStyles = makeStyles(() => ({
  banner: {
    'margin-bottom': '1em',
    'margin-top': '1em',
    height: '230px',
  },
  map: {
    width: '100%',
    'background-color': '#fff',
    'border-radius': '5px',
    height: '230px',
  },
  typo: {
    'margin-bottom': '.6em',
    'border-radius': '5px',

  },
  title: {
    'background-color': '#fff',
    'border-radius': '5px',
    padding: '16px',
    marginLeft: '5px',
  },
  mapcontainer: {
    'padding-right': '18px',
  },
  searchBar: {
    bottom: 0,
  },
}));
// == Component
export default function BannerAfter() {
  const classes = useStyles();

  return (
    <Grid className={classes.banner} container spacing={0} direction="row" wrap="nowrap">
      <Grid className={classes.mapcontainer} container sm={3}>
        <img className={classes.map} src="src/assets/img/map.png" alt="" />
      </Grid>
      <Grid className={classes.title} container direction="column" sm={9} alignContent="left" justify="space-between">
        <Grid>
          <Typography className={classes.typo} variant="h4" align="left">Les Evénements près de: </Typography>
          <Typography className={classes.typo} variant="h4" align="left">VILLE </Typography>
        </Grid>
        <Grid className={classes.searchBar}>
          <SearchBarMaps />
        </Grid>
      </Grid>
    </Grid>
  );
}
