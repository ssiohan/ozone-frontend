// == Import : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';

// == Import : local
import './homepage.scss';

// == import Composants
import Banner from 'src/components/Banner';
import Description from './Description';
import Cardweb from './Cardweb';
import Cardmob from './Cardmob';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg" id="app">
      <Grid className={classes.homepage}>
        <Banner />
        <Grid className={classes.homepageContent} container spacing={3}>
          <Grid item md={3}>
            <Description />
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Hidden only={['xs']}><Cardweb /></Hidden>
            <Hidden only={['xs']}><Cardweb /></Hidden>
            <Hidden only={['xs']}><Cardweb /></Hidden>
            <Hidden only={['sm', 'md', 'lg', 'xl']}><Cardmob /></Hidden>
            <Hidden only={['sm', 'md', 'lg', 'xl']}><Cardmob /></Hidden>
            <Hidden only={['sm', 'md', 'lg', 'xl']}><Cardmob /></Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
