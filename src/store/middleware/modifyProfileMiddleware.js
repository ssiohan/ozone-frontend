/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
// == Imports: npm
import axios from 'axios';

// == Import d'actions
import { SEND_MODIFIED_DATA } from 'src/store/reducer/profile';

// == Le middleware

const modifyProfileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MODIFIED_DATA: {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('id');
      axios({
        method: 'patch',
        url: `https://api.geekoz.fr/api/v1/users/${userId}`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
          email: `${store.getState().profile.profileEmail}`,
          pseudo: `${store.getState().profile.profilePseudo}`,
          firstname: `${store.getState().profile.profileFirstname}`,
          lastname: `${store.getState().profile.profileLastname}`,
          description: `${store.getState().profile.profileDescription}`,
          birthdate: `${store.getState().profile.profileBirthdate}`,
          avatar: `${store.getState().profile.profileAvatar}`,
        },
      })
        .then((response) => {
          console.log(response.data);
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
