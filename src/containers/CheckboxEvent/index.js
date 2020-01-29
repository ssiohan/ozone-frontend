import { connect } from 'react-redux';

import CheckboxEvent from 'src/components/Homepage/CheckboxEvent';
import { ateliercategory } from 'src/store/reducer/homepage';


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    category: state.homepage.category,
  };
};

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category) => {
    // console.log('mDTP', 'category');
    dispatch(ateliercategory(category));
  },
});

// == Container
const CheckboxEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckboxEvent);

// == Export
export default CheckboxEventContainer;
