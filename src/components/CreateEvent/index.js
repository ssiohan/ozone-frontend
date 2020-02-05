/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


// == Import : local
import './createEvent.scss';

// == Import : sous-composants

import CreateForm from './CreateForm';
import CreateEventValid from './CreateEventValid';


// == Style du composant
const useStyles = makeStyles((theme) => ({
  createForm: {
    flexGrow: 1,
  },
  preview: {
    marginTop: theme.spacing(1),
  },
  root: {
    background: 'linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0, 0, 0, 0.7)), url("src/assets/img/grass.jpg")',
    'background-size': 'cover',
  },
}));


// == Composant
const CreateEvent = ({
  onCreateEventFieldChange,
  getCreateEvent,
  statusText,
  title,
  onCheckForEmptyFields,
  emptyFieldsCounter,
  logged,
  onGetCoordinates,
}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      {statusText && <CreateEventValid title={title} />}
      {!statusText && (
        <CreateForm
          className={classes.createForm}
          getCreateEvent={getCreateEvent}
          onCreateEventFieldChange={onCreateEventFieldChange}
          onCheckForEmptyFields={onCheckForEmptyFields}
          emptyFieldsCounter={emptyFieldsCounter}
          logged={logged}
          onGetCoordinates={onGetCoordinates}
        />
      )}
    </Grid>
  );
};
// == Props par défault
CreateEvent.defaultProps = {
  onCreateEventFieldChange: null,
  getCreateEvent: null,
  emptyFieldsCounter: 0,
  onGetCoordinates: null,
};

// == Validation des props
CreateEvent.propTypes = {
  onCreateEventFieldChange: PropTypes.func,
  getCreateEvent: PropTypes.func,
  statusText: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  onCheckForEmptyFields: PropTypes.func.isRequired,
  emptyFieldsCounter: PropTypes.number,
  onGetCoordinates: PropTypes.func,
};
// == Export
export default CreateEvent;
