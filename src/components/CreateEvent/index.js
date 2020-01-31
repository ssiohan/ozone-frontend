/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


// == Import : local
import './createEvent.scss';

// == Import : sous-composants
import Banner from 'src/components/Banner';
import AddForm from './AddForm';
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
const CreateEvent = ({onCreateEventFieldChange}) => {
  const classes = useStyles();
  return (
    <div id="createEvent">
      <Banner />
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.root}
      >
        <Grid item>
          <AddForm onCreateEventFieldChange={onCreateEventFieldChange} />
        </Grid>
        <Grid item>
        Preview en live
        </Grid>
      </Grid>
    </div>
  );
};

// == Export
export default CreateEvent;
