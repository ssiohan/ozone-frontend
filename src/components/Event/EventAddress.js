// == Import: npm
import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import Grid from '@material-ui/core/Grid';

// Source: https://material-ui.com/components/material-icons/

// == Composant
const EventAddress = () => (
  <div id="event_footer_address">
    <Grid container>
      <Grid item>
        <RoomIcon /> 3 route de la Plage
      </Grid>
      <Grid item>
        50770, Armanville
      </Grid>
      <Grid item>
        France
      </Grid>
    </Grid>

  </div>
);

// == Export
export default EventAddress;
