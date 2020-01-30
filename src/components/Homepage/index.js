// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// == Import : local
import './homepage.scss';

// == import Composants
import Banner from 'src/components/Banner';
import BannerAfter from 'src/containers/Homepage/BannerAfter';
import Cardweb from 'src/components/Homepage/Cardweb';
import Dialog from 'src/components/Banner/Dialog';
import Description from './Description';
import LeftBar from './LeftBar';
import Cardmob from './Cardmob';

const useStyles = makeStyles(() => ({

  container: {
    'max-width': '1080px',
  },
}));

const Homepage = ({ search, events, category }) => {

  // -- add upper stylesheet
  const classes = useStyles();

  // -- state => homepage: category

  const currentCategory = category;

  // if category is "all": display all the events. else: use filter

  const filteredEvents = currentCategory === 'all'
    ? events
    : events.filter((event) => event.typeEvent === currentCategory);

  console.log(currentCategory);
  return (
    <div>
      {!search && <Banner />}
      <Container className={classes.container} id="app">
        <Grid>
          {search && <Hidden only={['xs']}><BannerAfter /></Hidden>}
          <Grid container spacing={3}>
            <Grid item md={3}>
              {!search && <Description />}
              {search && <LeftBar />}
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <Hidden only={['sm', 'md', 'lg', 'xl']}><Dialog /></Hidden>
              <Hidden only={['xs']}>
                {filteredEvents.map((event) => (
                  <Cardweb key={event.id} {...event} />))}
              </Hidden>
              <Hidden only={['sm', 'md', 'lg', 'xl']}>
                {filteredEvents.map((event) => (
                  <Cardmob key={event.id} {...event} />))}
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Homepage.propTypes = {
  search: PropTypes.bool.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  category: PropTypes.string.isRequired,
};
export default Homepage;
