import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

// == Import : local
import './homepage.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup({ changeCategory }) {

  const classes = useStyles();
  const [state, setState] = React.useState({
    Atelier: false,
    'Acte Citoyen': false,
    'Réunion d\'information': false,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });

    changeCategory(name);
  };

  const { atelier, acte, reunion } = state;


  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Type d'événement:</FormLabel>
        <RadioGroup>
          <FormControlLabel
            control={<Radio checked={atelier} color="primary" onChange={handleChange('Atelier')} value="atelier" />}
            label="Atelier Créatif"
          />
          <FormControlLabel
            control={<Radio checked={acte} color="primary" onChange={handleChange('Acte Citoyen')} value="acte" />}
            label="Acte citoyen"
          />
          <FormControlLabel
            control={<Radio color="primary" checked={reunion} onChange={handleChange('Réunion d\'information')} value="reunion" />}
            label="Réunion"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
CheckboxesGroup.propTypes = {
  changeCategory: PropTypes.func.isRequired,
};
