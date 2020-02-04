import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


const FormDialog = ({ searchOk, changeInputValue }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setOpen(false);
    // console.log('Je veux envoyer le message');
    searchOk();
  };
  const handleChange = (event) => {

    changeInputValue(event.target.value);
  };

  const useStyles = makeStyles(() => ({
    dialogButton: {
      'background-color': 'rgba(255, 255, 255, 0.8)',
      color: 'black',
      'white-space': 'nowrap',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, .7)',
      },

    },
    dialogbg: {
      opacity: '.9',

    },
  }));
  const classes = useStyles();
  return (
    <div className="dialog">
      <Button className={classes.dialogButton} variant="outlined" onClick={handleClickOpen}>
        Les événements près de chez moi <KeyboardArrowDown />
      </Button>
      <Dialog fullWidth maxWidth="sm" className={classes.dialogbg} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form action="">
          <DialogTitle className={classes.dialogContent} id="form-dialog-title">Recherche</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText>
              Les événements près de chez moi
            </DialogContentText>
            <TextField
              autoFocus
              label="choisir une ville"
              margin="dense"
              fullWidth
              type="text"
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions className={classes.dialogContent}>
            <Button onClick={handleClose} color="primary">
              Retour
            </Button>
            <Button type="submit" onClick={handleSubmit} color="primary">
            Ok
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
FormDialog.defaultProps = {

  changeInputValue: null,
  searchOk: null,
};
FormDialog.propTypes = {

  searchOk: PropTypes.func,
  changeInputValue: PropTypes.func,
};
export default FormDialog;
