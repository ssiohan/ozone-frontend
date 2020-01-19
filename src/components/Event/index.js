// == Import : npm
import React from 'react';

// == Import : local
import './event.scss';

// == Import : sous-composants
import ProgressBar from './ProgressBar';
import ModifyButton from './ModifyButton';

// == Composant
const Event = () => (
  <div id="event">
    <div id="event_header">
      <div className="event_header_left">
        <h1>Ramassage de déchets sur la plage d'Armanville</h1>
        <div className="event_header_info">
          <span className="event_label_span">Acte citoyen</span>
          <div id="progress_participants">
            <p>30/50 participants</p>
            <ProgressBar />
          </div>
        </div>
        <p>Proposé par: <span className="event_author_name">Jean Marc de la compta</span></p>
      </div>
      <div className="event_header_right">
        <ModifyButton />
        <button type="submit">Partager</button>
      </div>
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
