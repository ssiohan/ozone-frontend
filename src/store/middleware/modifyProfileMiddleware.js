/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
// == Imports: npm
import axios from 'axios';

// == Import d'actions
import { SEND_MODIFIED_DATA, storeUserData } from 'src/store/reducer/profile';

// == Le middleware

const modifyProfileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MODIFIED_DATA: {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('id');
      const email = store.getState().profile.profileEmail;
      const pseudo = store.getState().profile.profilePseudo;
      const firstname = store.getState().profile.profileFirstname;
      const lastname = store.getState().profile.profileLastname;
      const description = store.getState().profile.profileDescription;
      const birthdate = store.getState().profile.profileBirthdate;
      // const avatar = store.getState().profile.profileAvatar;

      axios({
        method: 'patch',
        url: `https://api.ozone.best/api/v1/users/${userId}`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
          email,
          pseudo,
          firstname,
          lastname,
          description,
          birthdate,
        },
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(storeUserData(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
      break;
    default:
      next(action);
  }
};

// == Export
export default modifyProfileMiddleware;
