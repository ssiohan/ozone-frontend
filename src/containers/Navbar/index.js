/* eslint-disable linebreak-style */
// Ici le container du composant login à compléter
import { connect } from 'react-redux';

import Navbar from 'src/components/Navbar';
// import Drawer from 'src/components/Navbar/Drawer';

// == Préparation: data
const mapStateToProps = (state) => {

  return {
    logged: state.login.logged,
  };
};

// == Préparation - actions
const mapDispatchToProps = {};

// == Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// == Export
export default NavbarContainer;
