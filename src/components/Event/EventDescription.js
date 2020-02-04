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
    maxWidth: 1400,
  },
  image: {
    maxWidth: 400,
    maxHeight: 400,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  description: {
    textAlign: 'left',
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
                <Typography variant="body2" gutterBottom className={classes.description}>{description}</Typography>
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
