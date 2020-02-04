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
    backgroundColor: lighten('#526DDB', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#526DDB',
  },
})(LinearProgress);

// Position et marge de la barre de progression
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

// == Composant

const ProgressBar = ({userMax, participants}) => {
  const classes = useStyles();
  const percent = Math.trunc((participants / userMax) * 100);
console.log(percent);
  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        // Pour l'instant, valeur en dur, mais elle sera dynamisée par la suite
        value={percent}
      />

    </div>
  );
};

// == Export
export default ProgressBar;
