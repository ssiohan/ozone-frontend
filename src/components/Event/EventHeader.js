// == Imports : npm
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

// == Import : local
import './event.scss';

// == Import : sous-composants
import ProgressBar from './ProgressBar';
import ModifyButton from './ModifyButton';
import ShareButton from './ShareButton';
import EventLabel from './EventLabel';

// == Composant
const EventHeader = ({
  title,
  eventUsers,
  author,
  typeEvent,
  userMax,
}) => {
  return (
    <Grid container justify="space-between">
      {/* Partie gauche du header */}
      <Grid item container xs={12} md={9}>
        <Grid item>
          <h1 id="event_title">{title}</h1>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item>
            <EventLabel typeEvent={typeEvent} />
          </Grid>
          <Grid item>
            <p id="event_participants_progress">{eventUsers.length}/{userMax} participants</p>
            <ProgressBar participants={eventUsers.length} userMax={userMax} />
          </Grid>
        </Grid>
        <Grid item>
          <p>
            Proposé par : <span id="event_author_name">{author}</span>
          </p>
        </Grid>
      </Grid>
      {/* Partie droite header */}
      <Grid item xs={12} md={3}>
        {/* Le bouton modifier n'apparaît que pour
        les orgas connectés se trouvant sur leur event */}
        <Grid container alignItems="flex-end">
          <ModifyButton />
          <ShareButton />
        </Grid>
      </Grid>
    </Grid>
  )
};
EventHeader.propTypes = {
  userMax: PropTypes.number.isRequired,
  eventUsers: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  typeEvent: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
// == Export
export default EventHeader;
