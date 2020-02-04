/* eslint-disable linebreak-style */
// Ici le container du composant login à compléter
import { connect } from 'react-redux';

import DrawerProfile from 'src/components/Navbar/DrawerProfile';

// == Import d'action creators
import { logoutUser } from 'src/store/reducer/login';

// == Préparation: data
const mapStateToProps = null;

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  onClickOnLogout: () => {
    // console.log('hello depuis mDtp, je vais déconnecter le user');
    // On vide le local storage puis on passe le state logged de true à false
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('id');
    dispatch(logoutUser());
  },
});

// == Container
const DrawerProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerProfile);

// == Export
export default DrawerProfileContainer;
