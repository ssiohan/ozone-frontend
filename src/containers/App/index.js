/* eslint-disable linebreak-style */
// Ici le container du composant login à compléter
import { connect } from 'react-redux';

import App from 'src/components/App';
import { fetchData } from 'src/store/reducer/homepage';
import { isUserLogged } from 'src/store/reducer/login';

// == Import d'action creators


// == Préparation: data
const mapStateToProps = (state) => ({
  logged: state.login.logged,
  registered: state.signup.registered,
});

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => {
    const action = fetchData();
    dispatch(action);
  },
  fetchToken: () => {
    // console.log('hello depuis mDtp, je cherche un token');
    dispatch(isUserLogged());
  },
});

// == Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
