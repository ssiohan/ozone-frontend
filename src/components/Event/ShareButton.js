// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';

// Source: https://material-ui.com/components/buttons/

// == Marge du bouton custom
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

// == Composant
const ShareButton = () => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        size="medium"
        className={classes.button}
        startIcon={<ShareIcon />}
      >
        Partager
      </Button>
    </div>
  );
};

// == Export
export default ShareButton;
