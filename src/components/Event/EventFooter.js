// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import EventIcon from '@material-ui/icons/Event';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneIcon from '@material-ui/icons/Phone';
import { FaCoins } from 'react-icons/fa';
import PropTypes from 'prop-types';


// == Import : local
import './event.scss';

// == Import : sous-composants
import MapLink from './MapLink';
import MapEvent from './MapEvent';
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
const score = (a, b, c, d) => (a + b + c + d);

// == Composant
const EventFooter = ({
  latitude,
  longitude,
  painfulness,
  duration,
  impactEnvironmental,
  impactSocietal,
  address,
  dateEvent,

}) => {
  const classes = useStyles();
  const result = score(painfulness, duration, impactSocietal, impactEnvironmental);
  const treatDate = (apiDate) => {
    const date = apiDate;
    // retourne la date au format jour/mois/année
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const formatDate = `${day}/${month}/${year}`;

    return formatDate;
  };
  const treatHour = (apiDate) => {
    const date = apiDate;
    // retourne l'heure au format jour/mois/année
    const hour = date.slice(11, 13);
    const minute = date.slice(14, 16);
    const formatHour = `${hour}:${minute}`;


    return formatHour;
  };

  const time = treatHour(dateEvent);

  const date = treatDate(dateEvent);
  return (
    <Grid
      container
      justify="space-evenly"
      className={classes.event_footer}
    >
      {/* Partie de gauche avec la map, l'adresse et le lien vers Maps */}
      <Grid container item xs={12} md={4} className={classes.address}>
        <Grid item>
          <MapEvent
            latitude={latitude}
            longitude={longitude}
            address={address}
          />
        </Grid>
        <Grid
          container
          item
          direction="column"
        >
          <Grid item>
            <MapLink address={address} />
          </Grid>
          <Grid item>
            <EventAddress address={address} />
          </Grid>
        </Grid>
      </Grid>
      {/* Partie du milieu avec infos sur l'event: participants, pénibilité, durée etc.. */}
      <Grid item xs={12} md={4}>
        <EventCharacteristics
          painfulness={painfulness}
          duration={duration}
          impactEnvironmental={impactEnvironmental}
          impactSocietal={impactSocietal}
        />
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
            {date}
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
            {time}h
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
            <FaCoins fontSize="large" />
          </Grid>
          <Grid item className={classes.TableCell}>
            {/* Sera dynamisé */}
          Score: <span className="event_score">{result}/20</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
EventFooter.propTypes = {
  dateEvent: PropTypes.string.isRequired,
  painfulness: PropTypes.number.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  impactSocietal: PropTypes.number.isRequired,
  impactEnvironmental: PropTypes.number.isRequired,
};
// == Export
export default EventFooter;
