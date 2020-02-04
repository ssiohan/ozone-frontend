/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

// const email = 'username@gmail.com';
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const {
    onClose,
    selectedValue,
    open,
    // Props transmise par le parent SimpleDialogDemo qui l'a lui même obtenue du container DrawerProfile
    onClickOnLogout,
  } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleLougout = () => {
    // console.log('click on logout');
    onClickOnLogout();
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <List>
        <ListItem button component="a" href="/profile">
          <Typography underline="none" className={classes.Typography} href="/profile">
            Mon profil
          </Typography>
        </ListItem>
        <ListItem
          button
          component="a"
          // href="/logout"
          onClick={handleLougout}
        >
          <Typography
            underline="none"
            className={classes.Typography}
            // href="/logout"
          >
            Se deconnecter
          </Typography>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onClickOnLogout: PropTypes.func.isRequired,
};

export default function SimpleDialogDemo({ onClickOnLogout }) {
  // La props onClickonLogout vient du container DrawerProfile

  const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(email[1]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Grid item>
        <IconButton color="inherit" onClick={handleClickOpen}>
          <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
        </IconButton>
      </Grid>
      <SimpleDialog
        selectedValue=""
        open={open}
        onClose={handleClose}
        // Props qui vient du container et passée à SimpleDialog qui contient le bouton déconnexion
        onClickOnLogout={onClickOnLogout}
      />
    </div>
  );
}
// == Validation des props
SimpleDialogDemo.propTypes = {
  onClickOnLogout: PropTypes.func.isRequired,
};
