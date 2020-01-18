// == Import : npm
import React from 'react';

// == Import : local
import './event.scss';

// == Composant
const Event = () => (
  <div id="event">
    <div id="event_header">
    Titre, label, nombre de participants, nom de l'organisateur, bouton modifier, bouton partager
    </div>
    <div id="event_description">
      Image, description, bouton participer
    </div>
    <div id="event_footer">
      Carte, lien Google maps et adresse
      Infos sur l'event: participants, pénibilité, durée etc..
      Date, numéro organisateur, nombre de points à gagner
    </div>
  </div>
);

// == Export
export default Event;
