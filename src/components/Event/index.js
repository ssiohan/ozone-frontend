// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

// == Import : local
import './event.scss';

// == Import : sous-composants
import MapHomepage from 'src/components/MapHomepage';
import EventHeader from './EventHeader';
import EventDescription from './EventDescription';
import EventFooter from './EventFooter';
import MapEvent from './MapEvent';

// == Composant
const Event = ({ eventData, loading, found }) => {
  // console.log(eventData);
  return (
    <Grid container id="event">
      {/* Le found est OBLIGATOIRE car tant que les données 'eventData' ne sont pas chargées depuis l'api,
       elles sont en undifined, ce qui fait planter la page, grace au found on empeche l'affichage tant que les data ne sont pas reçues */}
      {!loading && found && (
        <>
          {/** Header de la page avec titre,label,auteur,infos participants, bouton modifier & partage.
          Inclue les sous-composants: ProgressBar, ModifyButton, ShareButton et EventLabel. */}
          <Grid item xs={12} id="event_header">
            <EventHeader
              title={eventData.title}
              eventUsers={eventData.eventUsers}
              author={eventData.author.pseudo}
              typeEvent={eventData.typeEvent}
              userMax={eventData.userMax}
            />
          </Grid>
          {/** Partie centrale de la page avec photo, description et bouton participer
          Inclue le sous-composant: ParticipateButton. */}
          <Grid item xs={12}>
            <EventDescription
              description={eventData.description}
              image={eventData.image}
            />
          </Grid>
          {/* Footer page avec map & adresse, caractérisques de l'event, contact de l'organisateur
          Inclue les sous-composants: MapLink, EventAddress et EventCharacteristics */}
          <Grid item xs={12} id="event_footer">
            <EventFooter
              painfulness={eventData.painfulness}
              duration={eventData.duration}
              impactSocietal={eventData.impactSocietal}
              impactEnvironmental={eventData.impactEnvironmental}
              latitude={eventData.latitude}
              longitude={eventData.longitude}
              address={eventData.adress}
            />

          </Grid>
        </>
      )}
    </Grid>
  );
};
Event.propTypes = {
  eventData: PropTypes.shape({
    eventUsers: PropTypes.array.isRequired,
    userMax: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dateEvent: PropTypes.string.isRequired,
    typeEvent: PropTypes.string.isRequired,
    image: PropTypes.string,
    painfulness: PropTypes.number.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    adress: PropTypes.string,
    impactSocietal: PropTypes.number.isRequired,
    impactEnvironmental: PropTypes.number.isRequired,
    author: PropTypes.object.isRequired,
  }),
  loading: PropTypes.bool,
  found: PropTypes.bool.isRequired,
};
Event.defaultProps = {
  // si on met "{}" (objet vide) on ne passe pas la validation, car chaque élement est obligatoire
  // "null" => on ne fournit pas d'objet
  // React commence par utiliser les defaultProps AVANT de valider les props
  eventData: null,
  loading: null,
};
// == Export
export default Event;
