// == Import : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';

// == Import : local
import './homepage.scss';

// == import Composants
import Banner from 'src/components/Banner';
import BannerAfter from 'src/components/Homepage/BannerAfter';
import Description from './Description';
import LeftBar from './LeftBar';
import Cardweb from './Cardweb';
import Cardmob from './Cardmob';
import SearchBarMaps from './SearchBarMaps';

const Homepage = ({ search }) => {
  return (
    <div>
      {!search && <Banner />}
      <Container maxWidth="md" id="app">
        <Grid>
          {search && <Hidden only={['xs']}><BannerAfter /></Hidden>}
          <Grid container spacing={3}>
            <Grid item md={3}>
              {!search && <Description />}
              {search && <LeftBar />}
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <Hidden only={['sm', 'md', 'lg', 'xl']}><SearchBarMaps /></Hidden>
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
    </div>
  );
};

Homepage.propTypes = {
  search: PropTypes.bool.isRequired,
};
export default Homepage;
