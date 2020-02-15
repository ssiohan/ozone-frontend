// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EventIcon from '@material-ui/icons/Event';
import Paper from '@material-ui/core/Paper';
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
  address: {
    maxWidth: 300,
    borderRight: 'solid 1px #E0E0E0',
    height: '100%',
    minHeight: 250,
  },
  tableRow: {
    minHeight: 50,
    // paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    textAlign: 'left',
  },
  table: {
    // border: 'solid 1px #E0E0E0',
  },
  tableCell: {
    // textAlign: 'left',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1080,
    borderRadius: '10px',
    background: 'F8F8F8',

  },
  addresslinks: {
    padding: '1em 0',
  },
  score: {
    marginTop: '5em',
    minHeight: 50,
    paddingLeft: theme.spacing(3),
    textAlign: 'left',
  },
  mapcontainer: {
    height: '100%',
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
    <Paper className={classes.paper}>
      <Grid container justify="space-between" spacing={3} className={classes.event_footer}>
        {/* Partie de gauche avec la map, l'adresse et le lien vers Maps */}
        <Grid item xs={12} md={4}>
          <Grid container className={classes.address}>
            <Grid item xs={12}>
              <MapEvent
                latitude={latitude}
                longitude={longitude}
                address={address}
              />
            </Grid>
            {/*  */}
          </Grid>
        </Grid>
        {/* Partie du milieu avec infos sur l'event: participants, pénibilité, durée etc.. */}
        <Grid item xs={12} md={4}>
          <Grid container direction="column" justify="space-between">
            <Grid item>
              <EventCharacteristics
                painfulness={painfulness}
                duration={duration}
                impactEnvironmental={impactEnvironmental}
                impactSocietal={impactSocietal}
              />
            </Grid>
          </Grid>
          <Grid item className={classes.addresslinks}>
            <EventAddress address={address} />
            <MapLink address={address} />
          </Grid>
        </Grid>
        {/* Partie de droite avec infos de contact de l'organisateur, date, score */}
        <Grid item xs={12} md={4} className={classes.table}>
          <Grid container className={classes.tableRow} spacing={2}>
            <Grid item className={classes.TableCell}>
              <EventIcon />
            </Grid>
            <Grid item className={classes.TableCell}>
              {date}
            </Grid>
          </Grid>
          <Grid container className={classes.tableRow} spacing={2}>
            <Grid item className={classes.TableCell}>
              <AccessTimeIcon />
            </Grid>
            <Grid item className={classes.TableCell}>
              {time}h
            </Grid>
          </Grid>
          <Grid container className={classes.tableRow} spacing={2}>
            <Grid item className={classes.TableCell}>
              <PhoneIcon />
            </Grid>
            <Grid item className={classes.TableCell}>
              {/* Sera dynamisé */}
              06.06.06.06.06
            </Grid>
          </Grid>
          <Grid container className={classes.score} spacing={2}>
            <Grid item className={classes.TableCell}>
              <FaCoins fontSize="large" />
            </Grid>
            <Grid item>
            Score: <span className="event_score">{result}/20</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
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
