/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FaRegUserCircle } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';


// == Import : local
import './login.scss';

// == Import : sous-composants
import Banner from 'src/components/Banner';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  root2: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
      minWidth: 300,
      border: 'solid 1px #E0E0E0',
    },
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#078171',
    color: '#F2F2F2',
    fontWeight: 'bold',
  },
}));

// == Composant
const Login = ({
  emailValue,
  passwordValue,
  onFieldChange,
}) => {
  const classes = useStyles();
  // Fonction qui permet de récupérer les données saisies par le user
  const handleInputChange = (evt) => {
    const fieldValue = evt.target.value;
    const fieldName = evt.target.name;
    // console.log(fieldValue, fieldName);
    onFieldChange(fieldName, fieldValue);
  };
  // Fonction qui permet de gérer la soumission du formulaire
  const handleLoginFormSubmit = (evt) => {
    evt.preventDefault();
    console.log('login form submitted');
  };
  return (
    <div id="login">
      <Grid
        container
        direction="column"
        className={classes.root}
        justify="center"
      >
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom xs={12}>
             Connexion
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FaRegUserCircle size={70} xs={12} />
        </Grid>
        <Grid item xs={12}>
          { /** Début du formulaire */}
          <form
            className={classes.root2}
            noValidate
            autoComplete="off"
            onSubmit={handleLoginFormSubmit}
          >
            <Grid
              container
              direction="column"
              justify="center"
            >
              <Grid item>
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
              <Grid item>
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
      </Grid>
    </div>
  );
};

// == Props par défaut
// Login.defaultProps = {
//   emailValue: '',
//   passwordValue: '',
// };

// == Validation des props
Login.propTypes = {
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  onFieldChange: PropTypes.func.isRequired,
};

// == Export
export default Login;
