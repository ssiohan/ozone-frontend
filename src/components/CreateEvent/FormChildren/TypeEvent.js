import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 190,
  },
}));

export default function TypeEvent({ onCreateEventFieldChange }) {
  const classes = useStyles();
  const [typeEvent, setData] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleCreateEventInputChange = (evt) => {
    const fieldValue = evt.target.value;
    const fieldName = evt.target.name;
    onCreateEventFieldChange(fieldName, fieldValue);
    setData(evt.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Type d'événement</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={typeEvent}
          name="typeEvent"
          onChange={handleCreateEventInputChange}
        >
          <MenuItem value="Atelier">Atelier</MenuItem>
          <MenuItem value="Acte Citoyen">Acte Citoyen</MenuItem>
          <MenuItem value="Réunion d'information">Réunion d'information</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
TypeEvent.defaultProps = {
  onCreateEventFieldChange: null,
};

// == Validation des props
TypeEvent.propTypes = {
  onCreateEventFieldChange: PropTypes.func,
};
