// == Import : npm
import React from 'react';

// == Import : local
import './event.scss';

// == Import : sous-composants
import ProgressBar from './ProgressBar';
import ModifyButton from './ModifyButton';
import ShareButton from './ShareButton';
import ParticipateButton from './ParticipateButton';

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
        <ShareButton />
      </div>
    </div>
    <div id="event_description">
      <div className="event_description_left">
        <img src="https://docplayer.fr/docs-images/81/84162906/images/5-0.jpg" alt="" />
      </div>
      <div className="event_description__right">
        <p className="event_description_paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe repellendus atque
          perspiciatis quos architecto ipsa at ut illo obcaecati, ad cupiditate,
          eligendi maiores facere, molestias voluptate.Veniam, qui repudiandae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa inventore ullam,
          asperiores eaque dicta tenetur.Culpa, fugit! Expedita ad natus non
          necessitatibus neque delectus assumenda adipisci qui corrupti sed.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia aspernatur, earum at dolor fugit molestiae necessitatibus
          minus cum deleniti impedit soluta animi facilis consequuntur recusandae
          sed omnis iure asperiores nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Rem saepe repellendus atque
          perspiciatis quos architecto ipsa at ut illo obcaecati, ad cupiditate,
          eligendi maiores facere, molestias voluptate.
          Veniam, qui repudiandae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Esse culpa inventore ullam, asperiores eaque dicta tenetur.
          Culpa, fugit! Expedita ad natus non necessitatibus neque
          delectus assumenda adipisci qui corrupti sed.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia aspernatur, earum at dolor fugit molestiae necessitatibus
          minus cum deleniti impedit soluta animi facilis consequuntur
          recusandae sed omnis iure asperiores nihil!
        </p>
        <div className="participate_button">
          <ParticipateButton />
        </div>
      </div>
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
