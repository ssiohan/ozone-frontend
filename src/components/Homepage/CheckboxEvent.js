import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    atelier: true,
    acte: false,
    reunion: false,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { ateliercreatif, acte, reunion } = state;


  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Type d'événement:</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={ateliercreatif} color="primary" onChange={handleChange('ateliercreatif')} value="ateliercreatif" />}
            label="Atelier Créatif"
          />
          <FormControlLabel
            control={<Checkbox checked={acte} color="primary" onChange={handleChange('acte')} value="acte" />}
            label="Acte citoyen"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={reunion} onChange={handleChange('reunion')} value="reunion" />}
            label="Réunion"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
