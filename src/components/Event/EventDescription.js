// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import PropTypes from 'prop-types';

// == Import d'un sous-composant
import ParticipateButton from './ParticipateButton';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1080,
    borderRadius: '10px',
    background: '#ffffffcd',

  },
  // image: {
  //   maxWidth: 400,
  //   maxHeight: 250,
  // },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '250px',
  },
  description: {
    textAlign: 'left',
    maxHeight: '100%',
  },
}));

// == Composant
const EventDescription = ({ description, image }) => {
  const classes = useStyles();
  const baseUrl = 'https://api.geekoz.fr/uploads/images/';

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt={image}
                src={`${baseUrl}` + `${image}`}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body1" gutterBottom className={classes.description}>{description}</Typography>
              </Grid>
              <Grid item>
                <ParticipateButton />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
EventDescription.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};
EventDescription.defaultProps = {
  image: null,

};
// == Export
export default EventDescription;
