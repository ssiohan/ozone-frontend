// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';

// Marge du bouton custom
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ModifyButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        href="#page-modifier-event"
        color="primary"
      >
        <CreateIcon />
         Modifier
      </Button>
    </div>
  );
};

// == Export
export default ModifyButton;
