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
  root: {
    margin: theme.spacing(1),
    flexGrow: 1,
    // width: "auto",
  },
  preview: {
    marginTop: theme.spacing(1),
  },
}));


// == Composant
const CreateEvent = ({ onCreateEventFieldChange, getCreateEvent }) => {
  const classes = useStyles();
  return (
    <div id="createEvent">
      <BannerCreateEvent />
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.root}
      >
        <Grid item>
          <CreateForm getCreateEvent={getCreateEvent} onCreateEventFieldChange={onCreateEventFieldChange} />
        </Grid>
        <Grid item>
        Preview en live
        </Grid>
      </Grid>
    </div>
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
