// == Import: npm
import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

// == Composant
const EventAddress = ({ address }) => (
  <div id="event_footer_address">
    <Grid container>
      <Grid item>
        <RoomIcon /> {address}
      </Grid>
    </Grid>

  </div>
);
EventAddress.propTypes = {
  address: PropTypes.string.isRequired,

};
// == Export
export default EventAddress;
