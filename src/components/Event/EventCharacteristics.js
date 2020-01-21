// == Import : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

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
    textAlign: 'center',
    paddingLeft: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

// == Composant
const EventCharacteritics = () => {
  const classes = useStyles();
  return (
    <div id="event_characteristics">
      <Typography className={classes.characteristic}>
        <span className="event_characteristics">Caractéristiques de l'événement</span>
      </Typography>
      <Typography className={classes.characteristic}>
        <MdPeople /> 14/20 participants
      </Typography>
      <Typography className={classes.characteristic}>
        <GoGraph /> Penibilité
        <Rating name="read-only" value={4} size="small" />
      </Typography>
      <Typography className={classes.characteristic}>
        <MdAccessTime /> Durée
        <Rating name="read-only" value={4} size="small" />
      </Typography>
      <Typography className={classes.characteristic}>
        <FaPeopleCarry /> Impact societé
        <Rating name="read-only" value={4} size="small" />
      </Typography>
      <Typography className={classes.characteristic}>
        <GiRecycle /> Impact environnement
        <Rating name="read-only" value={4} size="small" />
      </Typography>
    </div>
  );
};

// == Export
export default EventCharacteritics;
