// == Import: npm
import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import Grid from '@material-ui/core/Grid';

// Source: https://material-ui.com/components/material-icons/

// == Composant
const EventAddress = ({address}) => (
  <div id="event_footer_address">
    <Grid container>
      <Grid item>
        <RoomIcon /> {address}
      </Grid>
    </Grid>

  </div>
);

// == Export
export default EventAddress;
