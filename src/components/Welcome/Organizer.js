/* eslint-disable max-len */
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
    'background-color': '#fff',
    'min-height': 550,
  },
  bg: {
    maxWidth: '1200px',
  },
  button: {
    margin: '1em 0',
    color: '#303944',
    'white-space': 'nowrap',
    '&:hover': {
      backgroundColor: '#203944',
      color: '#fff',
    },
  },
  img: {
    width: '100%',
  },
  title: {
    'margin-bottom': '2em',
  },
  text: {
    'margin-bottom': '2em',
  },
  paragraph: {
    'margin-bottom': '1em',
  },
}));

// == Composant
const Organizer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container alignContent="center" justify="center">
      <Grid container spacing={4} className={classes.bg}>
        {/* Left */}
        <Grid item xs={12} sm={12} md={6}>
          <Hidden only={['xs', 'sm']}>
            <Grid item xs={12}>
              <Grid container>
                <Link to="/signup">
                  <img className={classes.img} src="src/assets/img/create-event.png" alt="event" />
                </Link>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        {/* Right */}
        <Grid className={classes.text} item xs={12} sm={12} md={6}>
          <Grid className={classes.title} container direction="column" justify="space-between">
            <Grid item xs={12} sm={12}>
              <Typography variant="h4" align="left">
              Créez et Organisez un événement:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h4" align="left">
              Recevez plus de points
              </Typography>
            </Grid>
          </Grid>
          <Grid className={classes.paragraph} item xs={12} sm={12}>
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
          {/* <Hidden only={['xs', 'sm']}>
            <Grid className={classes.eventbutton} item xs={12} sm={6}>
              <Grid container>
                <Link to="/signup">
                  <Button className={classes.button} variant="contained">Je m'inscris</Button>
                </Link>
              </Grid>
            </Grid>
          </Hidden> */}
          <Hidden only={['md', 'lg', 'xl']}>
            <Grid item xs={12} sm={12} md={6}>
              <Grid item xs={12}>
                <Grid container>
                  <Link to="events">
                    <img className={classes.img} src="src/assets/img/create-event.png" alt="event" />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          {/* <Hidden only={['md', 'lg', 'xl']}> */}
            
          {/* </Hidden> */}
        </Grid>
        <Grid className={classes.eventbutton} item xs={12} sm={6}>
              <Grid container>
                <Link to="/signup">
                  <Button className={classes.button} variant="contained">Je m'inscris</Button>
                </Link>
              </Grid>
            </Grid>
      </Grid>
    </Grid>
  )
};

// == Export
export default Organizer;
