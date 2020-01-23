import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import InputSearch from 'src/containers/Homepage/InputSearch';
import { makeStyles } from '@material-ui/core/styles';

export default function FormDialog({ value, searchOk, changeInputValue  }) {
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
    console.log('Je veux envoyer le message');
    searchOk();
  };
  const handleChange = (evt) => {
    // const fieldValue = evt.target.value;
    // Equivalent à :
    const { value: fieldValue } = evt.target;

    console.log('Je change la valeur du champ', fieldValue);
    changeInputValue(fieldValue);
  };

  const useStyles = makeStyles(() => ({
    dialogButton: {
      'background-color': '#078171',
      color: '#fff',
      'white-space': 'nowrap',
      '&:hover': {
        backgroundColor: '#196A75',
        color: '#fff',
      },

    },
  }));
  const classes = useStyles();
  return (
    <div className="dialog">
      <Button className={classes.dialogButton} variant="outlined" onClick={handleClickOpen}>
        Choisir une Ville <KeyboardArrowDown />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form action="">
          <DialogTitle id="form-dialog-title">Recherche</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Chercher un évenement près de chez vous.
            </DialogContentText>
            <TextField
              value={value}
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
