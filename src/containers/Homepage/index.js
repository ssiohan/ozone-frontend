// Ici le container du composant homepage à compléter
import { connect } from 'react-redux';

import Homepage from 'src/components/Homepage';

// == Import d'action creators
// à compléter

// == Préparation: data
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    search: state.homepage.search,
  };
};

// == Préparation - actions
const mapDispatchToProps = {};

// == Container
const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

// == Export
export default HomepageContainer;
