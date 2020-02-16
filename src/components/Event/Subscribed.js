import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

// Lorsqu'un user clique sur le boutton PARTICIPER:
// ce modal s'ouvre SI il est Bien inscrit en BDD.

export default function Subscribed({ resetStatus }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    resetStatus();
    // resetStatus() repasse alreadySubscribe à false
    // car si il reste à true le modal va s'ouvrir lorsque l'user va aller sur un autre event
    // Si le state reste à true "il croit" que l'user est dejà inscrit même si ce n'est pas le cas
    // grâce à ce reset du state (en le repassant à son état initial: false) on evite le bug
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Félicitations! </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Inscription Réussie!
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
        Vous êtes sur la liste des partcipants de cet événement!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
Subscribed.propTypes = {
  resetStatus: PropTypes.func.isRequired,
};
