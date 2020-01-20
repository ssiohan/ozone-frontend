// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


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
const EventLabel = () => {
  const classes = useStyles();

  return (
    <div>
      <Chip
        // Le label sera dynamisé
        label="Acte citoyen"
        className={classes.chip}
      />
    </div>
  );
};

// == Export
export default EventLabel;
