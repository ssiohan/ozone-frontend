/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// == Import : local
import './createEvent.scss';

// == Import : sous-composants
import BannerCreateEvent from './BannerCreateEvent';
import CreateForm from './CreateForm';
// == Style du composant
const useStyles = makeStyles((theme) => ({
  createForm: {
    flexGrow: 1,
  },
  preview: {
    marginTop: theme.spacing(1),
  },
}));


// == Composant
const CreateEvent = ({ onCreateEventFieldChange, getCreateEvent }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <BannerCreateEvent />
     
        <CreateForm
          className={classes.createForm}
          getCreateEvent={getCreateEvent}
          onCreateEventFieldChange={onCreateEventFieldChange}
        />
     
    </Grid>
  );
};
// == Props par défault
CreateEvent.defaultProps = {
  onCreateEventFieldChange: null,
  getCreateEvent: null,
};

// == Validation des props
CreateEvent.propTypes = {
  onCreateEventFieldChange: PropTypes.func,
  getCreateEvent: PropTypes.func,
};
// == Export
export default CreateEvent;
