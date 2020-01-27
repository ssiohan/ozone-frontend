// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';


// == Import : local
import './banner.scss';
import Dialog from 'src/containers/Homepage/Dialog';
import DialogMob from 'src/components/Banner/DialogMob';
// import InputSearch from './InputSearch';
// == Composant
const Banner = () => (
  <Grid container alignContent="center" justify="center" id="banner">
    <Hidden only={['xs']}>
      <Dialog className="dialog" />
    </Hidden>
    <Hidden only={['sm', 'md', 'lg', 'xl']}>
      <DialogMob className="dialog" />
    </Hidden>
  </Grid>

);

// == Export
export default Banner;
