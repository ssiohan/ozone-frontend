// Ici le container du composant homepage à compléter
import { connect } from 'react-redux';

import Homepage from 'src/components/Homepage';

import { fetchData } from 'src/store/reducer/homepage';

// == Import d'action creators
// à compléter

// == Préparation: data
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    search: state.homepage.search,
    events: state.homepage.events,
  };
};

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => {
    const action = fetchData();
    dispatch(action);
  },
});

// == Container
const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

// == Export
export default HomepageContainer;
