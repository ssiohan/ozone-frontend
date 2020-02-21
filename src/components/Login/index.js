/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';


// == Import : local
import './login.scss';

// == Import : sous-composants

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'min-height': '100vh',
    background: 'linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0, 0, 0, 0.6)), url("src/assets/img/plant.jpg")',
    'background-size': 'cover',
  },
  form: {

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      border: 'solid 1px #E0E0E0',

    },
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#303944',
    color: '#F2F2F2',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#203944',
      color: '#fff',
    },
  },
  emptyFieldsMessage: {
    color: '#EA282A',
    fontSize: 'x-small',
  },
  link: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    backgroundColor: '#303944',

  },
  box: {
    marginTop: '8em',
    background: '#EDF0F2',
    borderRadius: '8px',
    padding: '1em .5em',
    opacity: '0.9',
  },
  field: {
    margin: '.5em',
  },
  container: {
    padding: '2em 0',
  },
}));

// == Composant
const Login = ({
  emailValue,
  passwordValue,
  onLoginFieldChange,
  emptyLoginFieldsCounter,
  onCheckForEmptyLoginFields,
  loginStatus,
  getLoggedIn,
}) => {
  const classes = useStyles();
  // Fonction qui permet de récupérer les données saisies par le user
  const handleInputChange = (evt) => {
    const fieldValue = evt.target.value;
    const fieldName = evt.target.name;
    // console.log(fieldValue, fieldName);
    onLoginFieldChange(fieldName, fieldValue);
  };
  // Fonction qui permet de gérer la soumission du formulaire
  const handleLoginFormSubmit = (evt) => {
    evt.preventDefault();
    // console.log('login form submitted');
    // On s'assure qu'il n'y a pas de champs vides
    onCheckForEmptyLoginFields();
    // On connecte le user
    getLoggedIn();
  };
  return (
    <div id="login">
      <Grid container direction="column" className={classes.root} alignItems="center">
        <Grid className={classes.box} item xs={12}>
          <Grid className={classes.container} container direction="column" alignItems="center">
            <Grid item>
              <Avatar align="center" className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Typography variant="h6" gutterBottom xs={12}>
              Connexion
            </Typography>
            {!loginStatus && (
            <Grid item xs={12}>
              { /** Début du formulaire */}
              <form
                className={classes.form}
                noValidate
                autoComplete="off"
                onSubmit={handleLoginFormSubmit}
              >
                <Grid container direction="column" justify="center">
                  {/* Message d'erreur en cas de champs non remplis à la soumission */}
                  {emptyLoginFieldsCounter > 0 && (
                  <Grid item>
                    <Typography variant="h5" gutterBottom className={classes.emptyFieldsMessage}>
                Tous les champs doivent être remplis.
                    </Typography>
                  </Grid>
                  )}
                  <Grid className={classes.field} item xs={12}>
                    <TextField
                      id="field-email"
                      label="Email"
                      type="email"
                      name="email"
                      variant="outlined"
                      value={emailValue}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid className={classes.field} item xs={12}>
                    <TextField
                      id="field-password"
                      label="Mot de passe"
                      type="password"
                      name="password"
                      variant="outlined"
                      value={passwordValue}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      type="submit"
                      color="default"
                      size="large"
                      className={classes.button}
                    >
            Me connecter
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            )}
            {/* S'il est connecté, lien vers page de connexion */}
            {loginStatus && (
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom xs={12}>
                Connexion réussie!
              </Typography>
              <Typography variant="body2" gutterBottom xs={12}>
                Veuillez cliquer sur ce lien pour vous rendre sur les évents
              </Typography>
              <Link to="/events" className={classes.link}>
                <Button className={classes.button} variant="contained">Voir les événements</Button>
              </Link>
            </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

// == Props par défaut
Login.defaultProps = {
  emailValue: '',
  passwordValue: '',
  emptyLoginFieldsCounter: 0,
  loginStatus: false,
};

// == Validation des props
Login.propTypes = {
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  onLoginFieldChange: PropTypes.func.isRequired,
  emptyLoginFieldsCounter: PropTypes.number,
  onCheckForEmptyLoginFields: PropTypes.func.isRequired,
  loginStatus: PropTypes.bool,
  getLoggedIn: PropTypes.func.isRequired,
};

// == Export
export default Login;
