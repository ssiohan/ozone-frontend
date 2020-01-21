// == Import : npm
import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


// == Import : local
import './homepage.scss';


// == Import : Components
import SearchBarMaps from 'src/components/Homepage/SearchBarMaps';

// == Add Css style with Material UI
const useStyles = makeStyles(theme => ({
  banner: {
    'margin-bottom': '1em',
    'margin-top': '1em',
  },
  map: {
    width: '8em',
    'background-color': '#fff',
    'margin-right': '1em',
  },
  typo: {
    'margin-bottom': '.6em',
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
      <Grid>
        <img className={classes.map} src="src/assets/img/map.png" alt="" />
      </Grid>
      <Grid container direction="column" alignContent="left">
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
