/* eslint-disable linebreak-style */
// Ici le container du composant login à compléter
import { connect } from 'react-redux';

import Profile from 'src/components/Profile';

// == Import d'action creators
import { preserveUserData } from 'src/store/reducer/profile';

// == Préparation: data
const mapStateToProps = (state) => ({
  userData: state.profile.userData,
});

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  keepUserData: () => {
    // console.log('hello depuis mDtp, je vais stocker les userData');
    dispatch(preserveUserData());
  },
});

// == Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

// == Export
export default ProfileContainer;
