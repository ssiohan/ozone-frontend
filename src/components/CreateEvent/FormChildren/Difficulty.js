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

export default function Painfulness({ onCreateEventFieldChange }) {
  const classes = useStyles();
  const [difficulty, setData] = React.useState('');
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
        <InputLabel id="demo-controlled-open-select-label">Pénibilité</InputLabel>
        <Select
          required
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={difficulty}
          name="painfulness"
          onChange={handleCreateEventInputChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
Painfulness.defaultProps = {
  onCreateEventFieldChange: null,
};

// == Validation des props
Painfulness.propTypes = {
  onCreateEventFieldChange: PropTypes.func,
};
