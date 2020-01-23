// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';

// == Import : local
import './banner.scss';
import Dialog from './Dialog';
// == Composant
const Banner = () => (
  <Grid container alignContent="center" justify="center" id="banner">
    {/* <img className="bannerImg" src="src/assets/img/earth.jpeg" alt="" /> */}
    <Dialog className="dialog" />
  </Grid>
);

// == Export
export default Banner;
