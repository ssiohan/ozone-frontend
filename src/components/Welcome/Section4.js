// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// == Import : local
import './welcome.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
}));

// == Composant
const BannerFree = () => (
  <Grid container alignContent="center" justify="center" id="section4"> 4</Grid>

);

// == Export
export default BannerFree;
