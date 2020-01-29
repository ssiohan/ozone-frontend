/* eslint-disable linebreak-style */
// Ici le container du composant login à compléter
import { connect } from 'react-redux';

import App from 'src/components/App';
import { fetchData } from 'src/store/reducer/homepage';

// == Import d'action creators


// == Préparation: data
const mapStateToProps = (state) => ({
  logged: state.login.logged,
});

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => {
    const action = fetchData();
    dispatch(action);
  },
});

// == Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
