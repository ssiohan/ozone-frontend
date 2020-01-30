// Ici le container du composant homepage à compléter
import { connect } from 'react-redux';

import SearchBarMaps from 'src/components/Homepage/SearchBarMaps';
import { changeInput, afterSearch } from 'src/store/reducer/homepage';


// == Import d'action creators


// == Préparation: data
const mapStateToProps = (state) => {
  // console.log(state);

  return {
    search: state.homepage.search,
    inputValue: state.homepage.inputValue,
  };
};

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value) => {
    dispatch(changeInput(value));
    console.log(value);
  },
  searchOk: () => {
    dispatch(afterSearch());
  },
});

// == Container
const SearchBarMapsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBarMaps);

// == Export
export default SearchBarMapsContainer;
