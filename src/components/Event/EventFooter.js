// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import EventIcon from '@material-ui/icons/Event';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneIcon from '@material-ui/icons/Phone';
import EuroIcon from '@material-ui/icons/Euro';


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
    borderRight: 'solid 1px #E0E0E0',
  },
  tableRow: {
    minHeight: 100,
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(3),
    textAlign: 'left',
  },
  table: {
    border: 'solid 1px #E0E0E0',
  },
  tableCell: {
    textAlign: 'left',
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
      <Grid
        container
        item
        xs={12}
        md={4}
        className={classes.address}
      >
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
      <Grid
        container
        item
        xs={12}
        md={4}
        direction="column"
        className={classes.table}
      >
        <Grid
          container
          item
          className={classes.tableRow}
          justify="space-around"
        >
          <Grid item className={classes.TableCell}>
            <EventIcon fontSize="large" />
          </Grid>
          <Grid item className={classes.TableCell}>
            {/* Sera dynamisé */}
           Le 06.02.2020
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <Grid
          container
          item
          className={classes.tableRow}
          justify="space-around"
        >
          <Grid item className={classes.TableCell}>
            <AccessTimeIcon fontSize="large" />
          </Grid>
          <Grid item className={classes.TableCell}>
            {/* Sera dynamisé */}
           16h30 à 18h15
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <Grid
          container
          item
          className={classes.tableRow}
          justify="space-around"
        >
          <Grid item className={classes.TableCell}>
            <PhoneIcon fontSize="large" />
          </Grid>
          <Grid item className={classes.TableCell}>
            {/* Sera dynamisé */}
            06.06.06.06.06
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <Grid
          container
          item
          className={classes.tableRow}
          justify="space-around"
        >
          <Grid item className={classes.TableCell}>
            <EuroIcon fontSize="large" />
          </Grid>
          <Grid item className={classes.TableCell}>
            {/* Sera dynamisé */}
          Score: <span className="event_score">16/20</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

// == Export
export default EventFooter;
