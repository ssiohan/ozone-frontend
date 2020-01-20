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
import ParticipateButton from './ParticipateButton';
import MapLink from './MapLink';
import EventAddress from './EventAddress';

// == Style des Grids


// == Composant
const Event = () => (
  <div id="event">
    {/** Header de la page avec titre,label,auteur,infos participants, bouton modifier & partage */}
    <div id="event_header">
      <Grid
        container
        // spacing={10}
        // direction="row"
        justify="space-between"
      >
        <Grid item lg={8}>
          {/* <div className="event_header_left"> */}
          <h1>Ramassage de déchets sur la plage d'Armanville</h1>
          {/* <div className="event_header_info"> */}
          <span className="event_label_span">Acte citoyen</span>
          <div id="progress_participants">
            <p>30/50 participants</p>
            <ProgressBar />
          </div>
          {/* </div> */}
          <p>Proposé par: <span className="event_author_name">Jean Marc de la compta</span></p>
          {/* </div> */}
        </Grid>
        <Grid item lg={3}>
          {/* <div className="event_header_right"> */}
          <ModifyButton />
          <ShareButton />
          {/* </div> */}
        </Grid>
      </Grid>
    </div>
    {/** Partie centrale de la page avec photo, description et bouton participer */}
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
    {/** Footer page avec map & adresse, caractérisques de l'event, contact de l'organisateur */}
    <div id="event_footer">
      <div id="event_footer_map">
        <div className="event_footer_map_picture">
          <img src="https://www.plages.tv/gallery/cms/images/carte-plage-armaville-pirou.jpg" alt="" />
        </div>
        <div className="event_footer_map_links">
          <MapLink />
          <EventAddress />
        </div>
      </div>
      <div id="event_footer_info">
           Infos sur l'event: participants, pénibilité, durée etc..
      </div>
      <div id="event_footer_contact">
           Date, numéro organisateur, nombre de points à gagner
      </div>
    </div>
  </div>
);

// == Export
export default Event;
