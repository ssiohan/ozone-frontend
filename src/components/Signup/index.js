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


// == Import : local
import './signup.scss';

// == Import : sous-composants
import BannerFree from 'src/components/Banner/BannerFree';
import SignupForm from './SignupForm';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '-webkit-gradient(linear, right top, left bottom, from(rgba(146,100,231,1)),to(rgba(54,204,212,1)))',
    'min-height': '700px',
  },
  icon: {
    marginBottom: theme.spacing(1),
  },
  link: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    backgroundColor: '#526DDB',
    textAlign: 'center',
  },
  box: {
    margin: '2em',
    background: '#EDF0F2',
    borderRadius: '8px',
    padding: '1em 0',
    opacity: '0.9',
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
      {/* <BannerFree /> */}
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
                Inscription réussie !
                Veuillez cliquer sur ce lien pour vous rendre vers la
                <Link
                  href="/login"
                  className={classes.link}
                >
                  page de connexion
                </Link>
              </Typography>
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
