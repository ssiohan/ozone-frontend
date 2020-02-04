// Ici le container du composant homepage à compléter
import { connect } from 'react-redux';

import Dialog from 'src/components/Banner/Dialog';
import { changeInput, afterSearch } from 'src/store/reducer/homepage';

// == Import d'action creators
// à compléter

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
  },

  searchOk: () => {
    dispatch(afterSearch());
  },
});

// == Container
const DialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dialog);

// == Export
export default DialogContainer;
