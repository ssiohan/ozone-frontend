// == Import : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';

// == Import : icônes
import { GiRecycle } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
import { FaPeopleCarry } from 'react-icons/fa';
import { MdPeople, MdAccessTime } from 'react-icons/md';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  characteristic: {
    textAlign: 'left',
    paddingLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

// == Composant
const EventCharacteritics = ({
  painfulness,
  duration,
  impactEnvironmental,
  impactSocietal,
}) => {
  const classes = useStyles();
  return (
    <div id="event_characteristics">
      <Typography className={classes.characteristic}>
        <span className="event_characteristics">Caractéristiques de l'événement</span>
      </Typography>
      {/* <Typography className={classes.characteristic}>
        <MdPeople /> 14/20 participants
      </Typography> */}
      <Typography className={classes.characteristic}>
        <GoGraph /> painfulness
        <Rating name="read-only" value={painfulness} size="small" />
      </Typography>
      <Typography className={classes.characteristic}>
        <MdAccessTime /> Durée
        <Rating name="read-only" value={duration} size="small" />
      </Typography>
      <Typography className={classes.characteristic}>
        <FaPeopleCarry /> Impact societé
        <Rating name="read-only" value={impactSocietal} size="small" />
      </Typography>
      <Typography className={classes.characteristic}>
        <GiRecycle /> Impact environnement
        <Rating name="read-only" value={impactEnvironmental} size="small" />
      </Typography>
    </div>
  );
};
EventCharacteritics.propTypes = {

  painfulness: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  impactEnvironmental: PropTypes.number.isRequired,
  impactSocietal: PropTypes.number.isRequired,

};
// == Export
export default EventCharacteritics;
