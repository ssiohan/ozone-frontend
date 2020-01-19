// == Import : npm
import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

// Source : https://material-ui.com/components/progress/
// La LinearProgress de base n'est pas assez épaisse: utilisation des éléments de style de Material
// pour la customizer

// Hauteur et épaisseur de la barre de progression
const BorderLinearProgress = withStyles({
  root: {
    height: 15,
    backgroundColor: lighten('#4B5C6B', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#4B5C6B',
  },
})(LinearProgress);

// Position et marge de la barre de progression
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(0),
  },
}));

// == Composant

const ProgressBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        // Pour l'instant, valeur en dur, mais elle sera dynamisée par la suite
        value={60}
      />

    </div>
  );
};

// == Export
export default ProgressBar;
