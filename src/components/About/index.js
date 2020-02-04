import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.title} container direction="row">
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" className={classes.titletxt}>Titre</Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <FormControl className={classes.event}>
              <TextField
                required
                id="event-title"
                label="Titre de l'événement"
                type="text"
                name="title"
                className={classes.fields}

                placeholder="ex: Apprendre la permaculture"
              />
            </FormControl>
          </Grid>
        </Grid>
    </div>
  );
}
