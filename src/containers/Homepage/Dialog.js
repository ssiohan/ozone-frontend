// Ici le container du composant homepage à compléter
import { connect } from 'react-redux';

import Dialog from 'src/components/Banner/Dialog';
import { changeInput, afterSearch, changeFieldValue, getCoordinates, } from 'src/store/reducer/homepage';

// == Import d'action creators
// à compléter

// == Préparation: data
const mapStateToProps = (state) => {
  // console.log(state);

  return {
    search: state.homepage.search,
    inputValue: state.homepage.inputValue,
    latitude: state.homepage.latitude,
    longitude: state.homepage.longitude,
    address: state.homepage.address,
  };
};

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value) => {
    dispatch(changeInput(value));
  },

  searchOk: () => {
    dispatch(afterSearch());
  },
  onSearchFieldChange: (name, value) => {
    // console.log('hello depuis mDTP', name, value);
    dispatch(changeFieldValue(name, value));
  },
  onGetCoordinates: (lat, lng) => {
    dispatch(getCoordinates(lat, lng));
  },

});


// == Container
const DialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dialog);

// == Export
export default DialogContainer;
