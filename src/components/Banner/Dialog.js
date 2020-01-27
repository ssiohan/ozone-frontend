import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

export default function FormDialog({ searchOk, changeInputValue }) {
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
  const handleChange = (evt) => {
    // const fieldValue = evt.target.value;
    // Equivalent à :
    const { value: fieldValue } = evt.target;

    // console.log('Je change la valeur du champ', fieldValue);
    changeInputValue(fieldValue);
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
  }));
  const classes = useStyles();
  return (
    <div className="dialog">
      <Button className={classes.dialogButton} variant="outlined" onClick={handleClickOpen}>
        Les événements près de chez moi <KeyboardArrowDown />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form action="">
          <DialogTitle id="form-dialog-title">Recherche</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Les événements près de chez moi
            </DialogContentText>
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="city"
              label="Votre ville"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
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
}
FormDialog.propTypes = {

  changeInputValue: PropTypes.func.isRequired,
  searchOk: PropTypes.func.isRequired,
};
