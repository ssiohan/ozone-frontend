// == Import : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


// == Import : local
import './homepage.scss';

// == import Composants
import Banner from 'src/components/Banner';
import Description from './Description';
import Cardweb from './Cardweb';

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
            <Cardweb />
            <Cardweb />
            <Cardweb />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
