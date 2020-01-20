// == Import : npm
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// == Import : local
import './event.scss';

// == Import : sous-composants
import ProgressBar from './ProgressBar';
import ModifyButton from './ModifyButton';
import ShareButton from './ShareButton';
import EventLabel from './EventLabel';
import ParticipateButton from './ParticipateButton';
import MapLink from './MapLink';
import EventAddress from './EventAddress';

// == Style des Grids


// == Composant
const Event = () => (
  <div id="event">
    {/** Header de la page avec titre,label,auteur,infos participants, bouton modifier & partage */}
    <Grid
      container
      justify="space-between"
    >
      {/* Partie gauche du header */}
      <Grid item container xs={12} md={9}>
        <Grid item>
          <h1 id="event_title">Ramassage de déchets sur la plage d'Armanville</h1>
        </Grid>
        <Grid
          item
          container
          spacing={5}
        >
          <Grid item>
            <EventLabel />
          </Grid>
          <Grid item>
            <p id="event_participants_progress">30/50 participants</p>
            <ProgressBar />
          </Grid>
        </Grid>
      </Grid>
      {/* Partie droite header */}
      <Grid item xs={12} md={3}>
        <ModifyButton />
        <ShareButton />
      </Grid>
    </Grid>
  </div>
);

// == Export
export default Event;
