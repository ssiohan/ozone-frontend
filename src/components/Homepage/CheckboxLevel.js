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
    penibilite: true,
    duree: false,
    societe: false,
    environnement: false,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  const {
    penibilite, duree, societe, environnement,
  } = state;


  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Niveaux</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={penibilite} color="primary" onChange={handleChange('penibilite')} value="penibilite" />}
            label="Penibilité"
          />
          <FormControlLabel
            control={<Checkbox checked={duree} color="primary" onChange={handleChange('duree')} value="duree" />}
            label="Durée"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={societe} onChange={handleChange('societe')} value="societe" />}
            label="Impact Société"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={environnement} onChange={handleChange('environnement')} value="environnement" />}
            label="Environnement"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
