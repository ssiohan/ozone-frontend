// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

// == Import : local
import './event.scss';

// == Import : sous-composants
import MapLink from './MapLink';
import EventAddress from './EventAddress';
import EventCharacteristics from './EventCharacteristics';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  event_footer: {
    padding: theme.spacing(1),
  },
  image: {
    maxWidth: 300,
    maxHeight: 300,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  address: {
    maxWidth: 300,
    borderRight: 'dashed #078171',
  },
}));

// == Composant
const EventFooter = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-evenly"
      className={classes.event_footer}
    >
      {/* Partie de gauche avec la map, l'adresse et le lien vers Maps */}
      <Grid container item xs={12} md={4}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
                // Sera dynamisé ?
              alt="carte plage d'armanville"
              src="https://www.plages.tv/gallery/cms/images/carte-plage-armaville-pirou.jpg"
            />
          </ButtonBase>
        </Grid>
        <Grid
          container
          item
          direction="column"
          className={classes.address}
        >
          <Grid item>
            <MapLink />
          </Grid>
          <Grid item>
            <EventAddress />
          </Grid>
        </Grid>
      </Grid>
      {/* Partie du milieu avec infos sur l'event: participants, pénibilité, durée etc.. */}
      <Grid item xs={12} md={4}>
        <EventCharacteristics />
      </Grid>
      {/* Partie de droite avec infos de contact de l'organisateur, date, score */}
      <Grid item xs={12} md={4}>
          Droite
      </Grid>
    </Grid>
  );
};

// == Export
export default EventFooter;
