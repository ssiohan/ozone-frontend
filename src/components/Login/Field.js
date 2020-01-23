// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

// == Import : local
// import './field.scss';

// == Composant
class Field extends React.Component {
  handleChange = (evt) => {
    // Recup des props utiles
    const { onInputChange, name } = this.props;
    // Récup les infos du champ (name, value)
    const newValue = evt.target.value;
    // Éxécution de la fonction venant du dessus
    onInputChange(newValue, name);
  }

  render() {
    // Déstructuration de l'objet des props
    const {
      value,
      type,
      name,
      label,
    } = this.props;

    const inputId = `field-${name}`;

    return (
      <TextField
          // React - state
        value={value}
        onChange={this.handleChange}
          // infos de base
        id={inputId}
        type={type}
        variant="outlined"
        label={label}
        name={name}
      />
    );
  }
}


Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
