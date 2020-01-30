// Ici le container du composant homepage à compléter
import { connect } from 'react-redux';

import { changeInput } from 'src/store/reducer/homepage';
import BannerAfter from 'src/components/Homepage/BannerAfter';

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
});

// == Container
const BannerAfterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BannerAfter);

// == Export
export default BannerAfterContainer;
