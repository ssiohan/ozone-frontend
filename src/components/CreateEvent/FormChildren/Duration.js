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
    minWidth: 170,
  },
}));

export default function Duration({ onCreateEventFieldChange }) {
  const classes = useStyles();
  const [duration, setData] = React.useState('');
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
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Durée</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={duration}
          name="duration"
          onChange={handleCreateEventInputChange}
          required
        >
          <MenuItem value={1}>1 heure</MenuItem>
          <MenuItem value={2}>2heures</MenuItem>
          <MenuItem value={3}>5heures</MenuItem>
          <MenuItem value={4}>10heures</MenuItem>
          <MenuItem value={5}>15heures</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
Duration.defaultProps = {
  onCreateEventFieldChange: null,
};

// == Validation des props
Duration.propTypes = {
  onCreateEventFieldChange: PropTypes.func,
};
