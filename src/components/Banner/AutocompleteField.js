import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import PropTypes from 'prop-types';
// == Style du composant
const useStyles = makeStyles(() => ({

  title: {
    background: '#fff',
    padding: '1em',
    margin: '.3em',
  },
}));
const Autocomplete = ({ onSearchFieldChange, onGetCoordinates }) => {
  const [address, setAddress] = React.useState('');
  const classes = useStyles();

  // console.log(useState);
  const handleSelect = (value) => {
    const fieldName = 'address';

    onSearchFieldChange(fieldName, value);
    // console.log(value);

    setAddress(value);

    geocodeByAddress(value)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => onGetCoordinates(lat, lng))
      .catch((error) => console.error('Error', error));
  };


  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({
          getInputProps,
          suggestions,
          getSuggestionItemProps,
          loading,
        }) => (
          <div>
            <TextField
              {...getInputProps()}
              className={classes.title}
              id="adress"
              label="Entrez une adresse"
              type="text"
              name="adress"
              required
              fullWidth
            />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                return (
                  <div className={classes.suggestions} {...getSuggestionItemProps(suggestion)}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};
Autocomplete.defaultProps = {
  onSearchFieldChange: null,
  onGetCoordinates: null,

};
Autocomplete.propTypes = {
  onSearchFieldChange: PropTypes.func,
  onGetCoordinates: PropTypes.func,
};
export default Autocomplete;
