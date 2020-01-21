// == Import : npm
import React from 'react';

// == Import : local
import './event.scss';

// == Import : sous-composants
import EventHeader from './EventHeader';
import EventDescription from './EventDescription';
import EventFooter from './EventFooter';


// == Composant
const Event = () => (
  <div id="event">
    {/** Header de la page avec titre,label,auteur,infos participants, bouton modifier & partage.
         Inclue les sous-composants: ProgressBar, ModifyButton, ShareButton et EventLabel. */}
    <div id="event_header">
      <EventHeader />
    </div>
    {/** Partie centrale de la page avec photo, description et bouton participer
         Inclue le sous-composant: ParticipateButton. */}
    <EventDescription />
    {/* Footer page avec map & adresse, caractérisques de l'event, contact de l'organisateur
        Inclue les sous-composants: MapLink, EventAddress et EventCharacteristics */}
    <div id="event_footer">
      <EventFooter />
    </div>
  </div>
);

// == Export
export default Event;
