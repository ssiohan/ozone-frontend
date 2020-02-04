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

export default function Author({ onCreateEventFieldChange }) {
  const classes = useStyles();
  const [author, setData] = React.useState('');
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
        <InputLabel id="demo-controlled-open-select-label">Id Author (test only)</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={author}
          name="author"
          onChange={handleCreateEventInputChange}
          required
        >
          <MenuItem value={17}>17</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
Author.defaultProps = {
  onCreateEventFieldChange: null,
};

// == Validation des props
Author.propTypes = {
  onCreateEventFieldChange: PropTypes.func,
};
