// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

// == Import : local
import './welcome.scss';

const useStyles = makeStyles(() => ({
  root: {
    margin: '2em auto',
    flexGrow: 1,
    padding: '1em',
    maxWidth: '1200px',
  },
  button: {
    'background-color': '#303944',
    color: '#fff',
    'white-space': 'nowrap',
    '&:hover': {
      backgroundColor: '#203944',
      color: '#fff',
    },
  },
  buttonmob: {
    margin: '1em 0',
    'background-color': '#303944',
    color: '#fff',
    'white-space': 'nowrap',
    '&:hover': {
      backgroundColor: '#203944',
      color: '#fff',
    },
  },
  left: {
    minHeight: '100%',

  },
}));

// == Composant
const Organizer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} spacing={1} container alignContent="center" justify="center">
      {/* Left */}
      <Grid xs={12} sm={6}>
        <Grid className={classes.left} container direction="column" justify="space-between">
          <Grid container direction="column" justify="space-between">
            <Grid item xs={12} sm={12}>
              <Typography variant="h4" align="left">
              Créez et Organiser un événement
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h4" align="left">
              Recevez plus de points
              </Typography>
            </Grid>
          </Grid>
          <Grid className={classes.eventbutton} item xs={12} sm={6}>
            <Hidden only={['xs']}>
              <Grid container>
                <Link to="/signup">
                  <Button className={classes.button} variant="contained">Je m'inscris</Button>
                </Link>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
      {/* Right */}
      <Grid item xs={12} sm={6}>
        <Typography variant="body1" align="left">
        Que vous soyez dejà actif dans le milieu assiociatif ou simplement débutantant vous pouvez créer un événement!
        </Typography>
        <Typography variant="body1" align="left">
        Pour cela rien de plus simple! Créez un compte organisateur et contribuer à sauver la planète.
        </Typography>
        <Typography variant="body1" align="left">
        Naturellement, organiser étant plus long et demandant plus d'implication qu'une simple participation vous serez récompensé en conséquences.
        </Typography>
      </Grid>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <Grid container>
          <Link to="/signup">
            <Button className={classes.buttonmob} variant="contained">Je m'inscris</Button>
          </Link>
        </Grid>
      </Hidden>
    </Grid>
  )
};

// == Export
export default Organizer;
