// == Imports : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

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
const EventDescription = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                // Sera dynamisé ?
                alt="plage d'armanville"
                src="https://docplayer.fr/docs-images/81/84162906/images/5-0.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom className={classes.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe repellendus atque
                perspiciatis quos architecto ipsa at ut illo obcaecati, ad cupiditate,
                eligendi maiores facere, molestias voluptate.Veniam, qui repudiandae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa inventore ullam,
                asperiores eaque dicta tenetur.Culpa, fugit! Expedita ad natus non
                necessitatibus neque delectus assumenda adipisci qui corrupti sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quia aspernatur, earum at dolor fugit molestiae necessitatibus
                minus cum deleniti impedit soluta animi facilis consequuntur recusandae
                sed omnis iure asperiores nihil! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Rem saepe repellendus atque
                perspiciatis quos architecto ipsa at ut illo obcaecati, ad cupiditate,
                eligendi maiores facere, molestias voluptate.
                Veniam, qui repudiandae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Esse culpa inventore ullam, asperiores eaque dicta tenetur.
                Culpa, fugit! Expedita ad natus non necessitatibus neque
                delectus assumenda adipisci qui corrupti sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quia aspernatur, earum at dolor fugit molestiae necessitatibus
                minus cum deleniti impedit soluta animi facilis consequuntur
                recusandae sed omnis iure asperiores nihil!
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <ParticipateButton />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

// == Export
export default EventDescription;
