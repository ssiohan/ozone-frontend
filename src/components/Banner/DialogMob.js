import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const DialogMob = () => {
  const useStyles = makeStyles(() => ({
    dialog: {
      color: '#fff',
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.dialog}>
      <Typography variant="h4">
        Bienvenue sur oZone
      </Typography>
    </div>
  );
};
export default DialogMob;
