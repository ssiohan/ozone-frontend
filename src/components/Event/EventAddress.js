// == Import: npm
import React from 'react';
import RoomIcon from '@material-ui/icons/Room';

// Source: https://material-ui.com/components/material-icons/

// == Composant

const EventAddress = () => (
  <div id="event_footer_address">
    <p className="address_line_1">
      <RoomIcon /> 3 route de la Plage
    </p>
    <p className="address_line_2">
      50770, Armanville
    </p>
    <p className="address_line_3">
    France
    </p>
  </div>
);

// == Export
export default EventAddress;
