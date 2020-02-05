// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// Source: https://material-ui.com/components/buttons/

// == Style du bouton custom
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#526DDB',
    color: '#F2F2F2',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#626DDB',
      color: '#fff',
    },
  },
}));

// == Composant
const ParticipateButton = () => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        size="large"
        className={classes.button}
      >
        Participer
      </Button>
    </div>
  );
};

// == Export
export default ParticipateButton;
