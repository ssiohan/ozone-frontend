/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


// == Import : local
import './signup.scss';

// == Import : sous-composants
import SignupForm from './SignupForm';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // background: '-webkit-gradient(linear, right top, left bottom, from(rgba(146,100,231,1)),to(rgba(54,204,212,1)))',
    background: 'linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0, 0, 0, 0.3)), url("src/assets/img/field.jpg")',
    'background-size': 'cover',
    'min-height': '700px',
  },
  icon: {
    marginBottom: theme.spacing(1),
  },
  link: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    backgroundColor: '#303944',
  },
  box: {
    margin: '2em',
    background: '#EDF0F2',
    borderRadius: '8px',
    padding: '1em 0',
    opacity: '0.9',
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
}));


// == Composant
const Signup = (
  {
    onSignupFieldChange,
    signupEmailValue,
    signupUsernameValue,
    signupPasswordValue,
    signupConfirmPasswordValue,
    passwordNotConfirmed,
    onCheckPasswordConfirmation,
    emptyFieldsCounter,
    onCheckForEmptyFields,
    getSignedUp,
    registered,
  },
) => {
  const classes = useStyles();
  return (
    <div id="signup">
      <Grid container direction="column" alignItems="center" className={classes.root}>
        <Grid className={classes.box} item xs={4}>
          <Grid container direction="column" alignItems="center">
            <Grid item className={classes.icon}>
              <Avatar align="center" className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Typography variant="h6" gutterBottom xs={12}>
                Inscription
            </Typography>
            {/* Si l'utilisateur n'est pas inscrit, il voit le form */}
            {!registered && (
            <Grid item xs={12}>
              <SignupForm
                onSignupFieldChange={onSignupFieldChange}
                signupEmailValue={signupEmailValue}
                signupUsernameValue={signupUsernameValue}
                signupPasswordValue={signupPasswordValue}
                signupConfirmPasswordValue={signupConfirmPasswordValue}
                onCheckPasswordConfirmation={onCheckPasswordConfirmation}
                passwordNotConfirmed={passwordNotConfirmed}
                emptyFieldsCounter={emptyFieldsCounter}
                onCheckForEmptyFields={onCheckForEmptyFields}
                getSignedUp={getSignedUp}
              />
            </Grid>
            )}
            {/* S'il est inscrit, lien vers page de connexion */}
            {registered && (
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom xs={12}>
                Inscription réussie!
              </Typography>
              <Typography variant="body2" gutterBottom xs={12}>
                Veuillez cliquer sur ce lien pour vous rendre vers la page de connexion
              </Typography>
              <Link to="/login" className={classes.link}>
                <Button className={classes.button} variant="contained">Login</Button>
              </Link>
            </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
// == Props par défault
Signup.defaultProps = {
  signupEmailValue: '',
  signupUsernameValue: '',
  signupPasswordValue: '',
  signupConfirmPasswordValue: '',
  passwordNotConfirmed: false,
  emptyFieldsCounter: 0,
  registered: false,
};
//= = Validation des props
Signup.propTypes = {
  onSignupFieldChange: PropTypes.func.isRequired,
  signupEmailValue: PropTypes.string,
  signupUsernameValue: PropTypes.string,
  signupPasswordValue: PropTypes.string,
  signupConfirmPasswordValue: PropTypes.string,
  onCheckPasswordConfirmation: PropTypes.func.isRequired,
  passwordNotConfirmed: PropTypes.bool,
  emptyFieldsCounter: PropTypes.number,
  onCheckForEmptyFields: PropTypes.func.isRequired,
  getSignedUp: PropTypes.func.isRequired,
  registered: PropTypes.bool,
};

// == Export
export default Signup;
