// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// Source: https://material-ui.com/components/buttons/

// == Style du bouton custom
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#303944',
    color: '#F2F2F2',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#203944',
      color: '#fff',
    },
  },
}));

// == Composant
const ParticipateButton = ({ onSetUserEvent }) => {
  const classes = useStyles();
  // Fonction qui gère la soumission du formulaire

  const handleSetUserEventSubmit = (evt) => {
    evt.preventDefault();
    onSetUserEvent();
  };
  return (
    <div>
      <form onSubmit={handleSetUserEventSubmit}>
        <Button
          variant="contained"
          color="default"
          size="large"
          className={classes.button}
          type="submit"
        >
          Participer
        </Button>
      </form>
    </div>
  );
};

// == Export
export default ParticipateButton;
