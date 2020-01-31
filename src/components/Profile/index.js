/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// == Import : local
import './profile.scss';

// == Import de sous-composants
import Banner from 'src/components/Banner';
import CardProfile from './CardProfile';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  leftPart: {
    position: 'sticky',
    top: theme.spacing(15),
  },
  upperLeft: {
    marginBottom: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  userInfo: {
    fontWeight: 'lighter',
    fontSize: 'medium',
    paddingLeft: theme.spacing(1),
  },
  modifyButton: {
    color: '#526DDB',
    marginBottom: theme.spacing(3),
  },
  description: {
    textAlign: 'left',
  },
  rightPart: {
    // position: 'absolute',
  },
  // score: {
  //   position: 'sticky',
  //   top: theme.spacing(15),
  // },
  scorePaper: {
    height: theme.spacing(20),
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
  },
  eventsHistory: {
    // overflowY: 'auto',
  },
}));


// == Composant
const Profile = () => {
  const classes = useStyles();
  return (
    <div id="profile">
      <Banner />
      <Grid
        container
        justify="center"
        className={classes.root}
      >
        {/* Partie de gauche avec avatar, nom etc.. et Description */}
        <Grid item xs={12} md={7}>
          <Grid
            container
            direction="column"
            justify="center"
            className={classes.leftPart}
          >
            <Grid
              item
              container
              justify="center"
              alignContent="flex-start"
              className={classes.upperLeft}
            >
              <Grid item>
                <Avatar alt="user name" src="/static/images/avatar/1.jpg" className={classes.avatar} />
              </Grid>
              <Grid
                item
                className={classes.userInfo}
              >
                <Grid item>
                  Username
                </Grid>
                <Grid item>
                  Prénom et Nom
                </Grid>
                <Grid item>
                  Rang
                </Grid>
                <Grid item>
                  Date d'inscription
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                // href="#page-modifier-profil"
                color="primary"
                className={classes.modifyButton}
              >
                <CreateIcon />
                Modifier le profil
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="h5"> Description</Typography>
              <Typography variant="caption" gutterBottom className={classes.description}>
                   Je m'présente, je m'appelle Henri
                   J'voudrais bien réussir ma vie, être aimé
                   Etre beau gagner de l'argent
                   Puis surtout être intelligent
                   Mais pour tout ça il faudrait que j'bosse à plein temps
                   J'suis chanteur, je chante pour mes copains
                   J'veux faire des tubes et que ça tourne bien, tourne bien
                   J'veux écrire une chanson dans le vent
                   Un air gai, chic et entraînant
                   Pour faire danser dans les soirées de Monsieur Durand
                   Et partout dans la rue
                   J'veux qu'on parle de moi
                   Que les filles soient nues
                   Qu'elles se jettent sur moi
                   Qu'elles m'admirent, qu'elles me tuent
                   Qu'elles s'arrachent ma vertu
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Partie de droite avec solde de points et événements */}
        <Grid item xs={12} md={4} className={classes.rightPart}>
          <Grid
            container
            direction="column"
            justify="center"
          >
            <Grid item className={classes.score}>
              <Paper className={classes.scorePaper}>
              Solde de points
              </Paper>
            </Grid>
            <Grid item className={classes.eventsHistory}>
              <CardProfile />
              <CardProfile />
              <CardProfile />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

// == Export
export default Profile;
