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
import CreateEventValid from './CreateEventValid';


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
const CreateEvent = ({
  onCreateEventFieldChange,
  getCreateEvent,
  statusText,
  title,
  onCheckForEmptyFields,
  emptyFieldsCounter,
  logged,
}) => {
  const classes = useStyles();
  return (
    <Grid container>
      <BannerCreateEvent />
      {statusText && <CreateEventValid title={title} />}
      {!statusText && (
        <CreateForm
          className={classes.createForm}
          getCreateEvent={getCreateEvent}
          onCreateEventFieldChange={onCreateEventFieldChange}
          onCheckForEmptyFields={onCheckForEmptyFields}
          emptyFieldsCounter={emptyFieldsCounter}
          logged={logged}
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
};
// == Export
export default CreateEvent;
