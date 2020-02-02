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

const ModifyProfileForm = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            Veuillez modifier les informations que vous souhaitez mettre à jour
          </DialogContentText>
          <Container justify="flex-start">
            <Grid container justify="flex-start" alignItems="center">
              <Grid item>
                <InputLabel htmlFor="profile-pseudo" className={classes.labels}>Pseudo</InputLabel>
              </Grid>
              <Grid item className={classes.profileFields}>
                <TextField
                  id="profile-pseudo"
                  label="Pseudo"
                  variant="outlined"
                  type="text"
                  name="profilePseudo"
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
                  label="Nom"
                  variant="outlined"
                  type="text"
                  name="profileLastname"
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

// == Export
export default ModifyProfileForm;
