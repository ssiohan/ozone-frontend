// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';


// Source: https://material-ui.com/components/chips/

// == Style du chim custom
const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1),
    backgroundColor: '#078171',
    color: '#F2F2F2',
    fontWeight: 'bold',
  },
}));

// == Composant
const EventLabel = ({typeEvent}) => {
  const classes = useStyles();

  return (
    <div>
      <Chip
        // Le label sera dynamisé
        label={typeEvent}
        className={classes.chip}
      />
    </div>
  );
};
EventLabel.propTypes = {

  typeEvent: PropTypes.string.isRequired,

};
// == Export
export default EventLabel;
