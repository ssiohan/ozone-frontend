import React from 'react';
import PropTypes from 'prop-types';


const InputSearch = ({ value, searchOk, changeInputValue }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Je veux modifier le state: search=true');
    searchOk();
  };

  const handleChange = (evt) => {
    // const fieldValue = evt.target.value;
    // Equivalent à :
    const { value: fieldValue } = evt.target;
    console.log('Je change la valeur du champ', fieldValue);
    changeInputValue(fieldValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} placeholder="Recherche" />
      <button type="submit">Rechercher</button>
    </form>
  );
};
InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  // changeInputValue: PropTypes.func.isRequired,
};
export default InputSearch;
