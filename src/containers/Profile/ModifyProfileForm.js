/* eslint-disable linebreak-style */
// Ici le container du composant login à compléter
import { connect } from 'react-redux';

import ModifyProfileForm from 'src/components/Profile/ModifyProfileForm';

// == Import d'action creators
import { changeProfileFieldValue, sendModifiedData } from 'src/store/reducer/profile';

// == Préparation: data
const mapStateToProps = (state) => ({
  profilePseudoValue: state.profile.profilePseudo,
  profileLastnameValue: state.profile.profileLastname,
  profileFirstnameValue: state.profile.profileFirstname,
  profileEmailValue: state.profile.profileEmail,
  profileBirthdateValue: state.profile.profileBirthdate,
  profileAvatarValue: state.profile.profileAvatar,
  profileDescriptionValue: state.profile.profileDescription,
});

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  onProfileFieldChange: (name, value) => {
    // console.log('hello depuis mDtp', name, value);
    dispatch(changeProfileFieldValue(name, value));
  },
  onSendModifiedData: () => {
    console.log('hello depuis mDtp, je vais envoyer les nouvelles données user à l API');
    dispatch(sendModifiedData());
  },
});

// == Container
const ModifyProfileFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModifyProfileForm);

// == Export
export default ModifyProfileFormContainer;
