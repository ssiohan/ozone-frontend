/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

// == Import : local
import './profile.scss';

// == Import de sous-composants
import Banner from 'src/components/Banner';
import ModifyProfileForm from 'src/containers/Profile/ModifyProfileForm';
import CardProfile from './CardProfile';

// == Style du composant
// Attention, forme un peu différente car Profile est une class
// source: https://stackoverflow.com/questions/56554586/how-to-use-usestyle-to-style-class-component-in-material-ui
const useStyles = (theme) => ({
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
  description: {
    textAlign: 'left',
  },
  scorePaper: {
    height: theme.spacing(20),
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
  },
  pseudo: {
    fontWeight: 'bold',
    fontSize: 'large',
  },
});


// == Composant
class Profile extends React.Component {
  /** Au moment du montage du composant:
   *  Je récupère les données du user pour qu'elles ne se perdent pas au refresh
   *  Pas besoin de vérifier si l'utilisateur est connecté car la route profile n'est
   *  accessible que si logged = true dans le state.
   */
  componentDidMount() {
    const {
      keepUserData,
    } = this.props;

    keepUserData();
  }

  render() {
    // Pour pouvoir utiliser le useStyles et les données user reçues de l'API
    const { classes, userData } = this.props;

    // Nécessaire pour pouvoir traiter les userData
    // source: https://stackoverflow.com/questions/54734480/undefined-props-in-componentdidmount
    if (userData === null) {
      return null;
    }
    // Formattage de la date reçue de l'api
    const treatDate = (apiDate) => {
      const date = apiDate;
      // retourne la date au format jour/mois/année
      const year = date.slice(0, 4);
      const month = date.slice(5, 7);
      const day = date.slice(8, 10);
      const formatDate = `${day}/${month}/${year}`;
      return formatDate;
    };
    // Date d'inscription reformattée
    const signupDate = treatDate(userData.createdAt);

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
                  <Avatar
                    alt="user name"
                    src={userData.avatar}
                    className={classes.avatar}
                  />
                </Grid>
                <Grid
                  item
                  className={classes.userInfo}
                >
                  <Grid item className={classes.pseudo}>
                    {userData.pseudo}
                  </Grid>
                  <Grid item>
                    <span>{userData.firstname}</span> <span>{userData.lastname}</span>
                  </Grid>
                  <Grid item>
                    {/* Map sur les rôles à rajouter */}
                    {userData.userRoles.map((role) => (
                      <p key={role.role.label}>{role.role.label}</p>
                    ))}
                  </Grid>
                  <Grid item>
                    Inscrit(e) depuis le {signupDate}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <ModifyProfileForm userData={userData} />
              </Grid>
              <Grid item>
                <Typography variant="h5"> Description</Typography>
                <Typography
                  variant="caption"
                  gutterBottom
                  className={classes.description}
                >
                  {userData.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Partie de droite avec solde de points et événements */}
          <Grid
            item
            xs={12}
            md={4}
            className={classes.rightPart}
          >
            <Grid
              container
              direction="column"
              justify="center"
            >
              <Grid
                item
                className={classes.score}
              >
                <Paper className={classes.scorePaper}>
                  <span>{userData.credit}</span> points
                </Paper>
              </Grid>
              <Grid
                item
                className={classes.eventsHistory}
              >
                {/* Map pour récupérer les événements du user */}
                {userData.userEvents.map((event) => (
                  <CardProfile key={event.event.id} {...event.event} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
// == Props par défault
Profile.defaultProps = {
  userData: null,
};
// == Validation des props
Profile.propTypes = {
  keepUserData: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  userData: PropTypes.object,
};

// == Export
// (export qui permet de conserver le style)
export default withStyles(useStyles, { withTheme: true })(Profile);
