// == Import : npm
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


// == Import : local
import './homepage.scss';


// == Import : Components
import Dialog from 'src/containers/Homepage/Dialog';
import MapHomepage from './MapHomepage';


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
 const BannerAfter = ({ address, latitude, longitude }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.banner} container spacing={0} direction="row" wrap="nowrap">
      <Grid className={classes.mapcontainer} item sm={3}>
        <MapHomepage
          latitude={latitude}
          longitude={longitude}
          address={address}
        />
      </Grid>
      <Grid className={classes.title} item sm={9}>
        <Grid container direction="column" justify="space-between">
          <Grid>
            <Typography className={classes.typo} variant="h4" align="left">Les Evénements près de: </Typography>
            <Typography className={classes.typo} variant="h5" align="left"> {address} </Typography>
          </Grid>
          <Grid className={classes.searchBar}>
            <Dialog />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
BannerAfter.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
};
export default BannerAfter;
