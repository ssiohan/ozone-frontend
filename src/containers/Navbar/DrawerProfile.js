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
    console.log('hello depuis mDtp, je vais déconnecter le user');
    // Les éléments ci-dessous seront à décommenter une fois que onClickOnLogout
    // sera passé dans le composant DrawerProfile et que le console.log fonctionnera au clic sur le bouton
    // localStorage.removeItem('token');
    // localStorage.removeItem('refresh_token');
    // localStorage.removeItem('id');
    // dispatch(logoutUser());
  },
});

// == Container
const DrawerProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerProfile);

// == Export
export default DrawerProfileContainer;
