import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Lorsqu'un user clique sur le boutton PARTICIPER:
// ce modal s'ouvre SI il n'est pas conncté ou si son Token est épiré.

export default function AlertNotConnected({ userIsConnected }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);

    // refait passer userNotConnected à false,
    // car lorsque que l'on clique sur le boutton participer,
    // userNotConnected passe à true, et fait apparaître la popup se connecter une fois connecté
    // cette fonction userIsConnected() sert juste à éviter ce phénomene...
    userIsConnected();

  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Participer à un événement </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Pour participer à un événement vous devez être connecté
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/login">
            <Button onClick={handleClose} color="primary" autoFocus>
              Se connecter
            </Button>
          </Link>
          <Link to="/signup">
            <Button onClick={handleClose} color="primary" autoFocus>
              S'inscrire
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
AlertNotConnected.propTypes = {
  userIsConnected: PropTypes.func.isRequired,
};
