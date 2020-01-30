// == import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == import : local
import Cardweb from '../Cardweb';

// == Composant
const Events = ({ events }) => (
  <div>
    {events.map((event) => (
      <Cardweb key={event.id} {...event} />))}
  </div>
);

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Events;
