/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import PropTypes from 'prop-types';


// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  modifyButton: {
    color: '#526DDB',
    marginBottom: theme.spacing(3),
  },
  saveButton: {
    backgroundColor: '#526DDB',
    marginBottom: theme.spacing(3),
    color: '#EDF0F2',
  },
  profileFields: {
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  labels: {
    width: 100,
    textAlign: 'center',
  },
}));

// == Composant

const ModifyProfileForm = ({
  userData,
  onProfileFieldChange,
  profilePseudoValue,
  profileLastnameValue,
  profileFirstnameValue,
  profileEmailValue,
  profileBirthdateValue,
  profileAvatarValue,
  profileDescriptionValue,
  onSendModifiedData,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Fonction qui gère la soumission du formulaire
  const handleClose = () => {
    setOpen(false);
    // evt.preventDefault();
    // console.log('form soumis');
    onSendModifiedData();
  };
  // Fonction qui gère la saisie d'infos dans le form
  const handleProfileInputChange = (evt) => {
    const inputFieldValue = evt.target.value;
    const inputFieldName = evt.target.name;
    // console.log(inputFieldName, inputFieldValue);
    onProfileFieldChange(inputFieldName, inputFieldValue);
  };

  return (
    <div>
      <Button className={classes.modifyButton} onClick={handleClickOpen}>
        <CreateIcon />
                Modifier le profil
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Modifier mon profil</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez modifier les informations que vous souhaitez mettre à jour.
          </DialogContentText>
          <Container justify="flex-start">
            <Grid container justify="flex-start" alignItems="center">
              <Grid item>
                <InputLabel htmlFor="profile-pseudo" className={classes.labels}>Pseudo</InputLabel>
              </Grid>
              <Grid item className={classes.profileFields}>
                <TextField
                  id="profile-pseudo"
                  label={userData.pseudo}
                  // defaultValue={userData.pseudo}
                  value={profilePseudoValue}
                  variant="outlined"
                  type="text"
                  name="profilePseudo"
                  onChange={handleProfileInputChange}
                />
              </Grid>
            </Grid>
            <Grid container justify="flex-start" alignItems="center">
              <Grid item>
                <InputLabel htmlFor="profile-lastname" className={classes.labels}>Nom</InputLabel>
              </Grid>
              <Grid item className={classes.profileFields}>
                <TextField
                  id="profile-lastname"
                  label={userData.lastname}
                  // defaultValue={userData.lastname}
                  value={profileLastnameValue}
                  variant="outlined"
                  type="text"
                  name="profileLastname"
                  onChange={handleProfileInputChange}
                />
              </Grid>
            </Grid>
            <Grid container justify="flex-start" alignItems="center">
              <Grid item>
                <InputLabel htmlFor="profile-firstname" className={classes.labels}>Prénom</InputLabel>
              </Grid>
              <Grid item className={classes.profileFields}>
                <TextField
                  id="profile-firstname"
                  label={userData.firstname}
                  // defaultValue={userData.firstname}
                  value={profileFirstnameValue}
                  variant="outlined"
                  type="text"
                  name="profileFirstname"
                  onChange={handleProfileInputChange}
                />
              </Grid>
            </Grid>
            <Grid container justify="flex-start" alignItems="center">
              <Grid item>
                <InputLabel htmlFor="profile-email" className={classes.labels}>Email</InputLabel>
              </Grid>
              <Grid item className={classes.profileFields}>
                <TextField
                  id="profile-email"
                  label={userData.email}
                  // defaultValue={userData.email}
                  value={profileEmailValue}
                  variant="outlined"
                  type="email"
                  name="profileEmail"
                  onChange={handleProfileInputChange}
                />
              </Grid>
            </Grid>
            <Grid container justify="flex-start" alignItems="center">
              <Grid item>
                <InputLabel htmlFor="profile-birthdate" className={classes.labels}>Date de naissance</InputLabel>
              </Grid>
              <Grid item className={classes.profileFields}>
                <TextField
                  id="profile-birthdate"
                  label="Date de naissance"
                  variant="outlined"
                  type="date"
                  // defaultValue={userData.birthdate}
                  value={profileBirthdateValue}
                  name="profileBirthdate"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  SelectProps={{
                    native: true,
                  }}
                  onChange={handleProfileInputChange}
                />
              </Grid>
            </Grid>
            <Grid container justify="flex-start" alignItems="center">
              <Grid item>
                <InputLabel htmlFor="profile-avatar" className={classes.labels}>Avatar</InputLabel>
              </Grid>
              <Grid item className={classes.profileFields}>
                <TextField
                  id="profile-avatar"
                  label="Avatar"
                  value={profileAvatarValue}
                  variant="outlined"
                  type="file"
                  name="profileAvatar"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  SelectProps={{
                    native: true,
                  }}
                  onChange={handleProfileInputChange}
                />
              </Grid>
            </Grid>
            <Grid container justify="flex-start" alignItems="center">
              <Grid item>
                <InputLabel htmlFor="profile-description" className={classes.labels}>Description</InputLabel>
              </Grid>
              <Grid item className={classes.profileFields}>
                <TextareaAutosize
                  id="profile-description"
                  label="Votre description"
                  aria-label="Description"
                  placeholder={userData.description}
                  // defaultValue={userData.description}
                  value={profileDescriptionValue}
                  variant="outlined"
                  rowsMin={10}
                  name="profileDescription"
                  onChange={handleProfileInputChange}
                />
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.saveButton}>
            Enregistrer les modifications
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
// == Props par défault
ModifyProfileForm.defaultProps = {
  userData: null,
  profilePseudoValue: '',
  profileLastnameValue: '',
  profileFirstnameValue: '',
  profileEmailValue: '',
  profileBirthdateValue: '',
  profileAvatarValue: '',
  profileDescriptionValue: '',
};

// == Validation des props
ModifyProfileForm.propTypes = {
  userData: PropTypes.object,
  onProfileFieldChange: PropTypes.func.isRequired,
  profilePseudoValue: PropTypes.string,
  profileLastnameValue: PropTypes.string,
  profileFirstnameValue: PropTypes.string,
  profileEmailValue: PropTypes.string,
  profileBirthdateValue: PropTypes.string,
  profileAvatarValue: PropTypes.string,
  profileDescriptionValue: PropTypes.string,
  onSendModifiedData: PropTypes.func.isRequired,
};

// == Export
export default ModifyProfileForm;
