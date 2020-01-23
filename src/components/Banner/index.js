// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';


// == Import : local
import './banner.scss';
import Dialog from 'src/containers/Homepage/Dialog';
// import InputSearch from './InputSearch';
// == Composant
const Banner = () => (
  <Grid container alignContent="center" justify="center" id="banner">
    <Dialog className="dialog" />
  </Grid>
);

// == Export
export default Banner;
