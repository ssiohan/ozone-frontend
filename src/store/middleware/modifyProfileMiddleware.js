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
      // const email = () => {
      //   if (!store.getState().profile.profileEmail.length === '') {
      //     return store.getState().profile.profileEmail;
      //   }
      //   return store.getState().profile.userData.email;
      // };
      // const pseudo = () => {
      //   if (!store.getState().profile.profilePseudo.length === '') {
      //     return store.getState().profile.profilePseudo;
      //   }
      //   return store.getState().profile.userData.pseudo;
      // };
      // const firstname = () => {
      //   if (!store.getState().profile.profileFirstname.length === '') {
      //     return store.getState().profile.profileFirstname;
      //   }
      //   return store.getState().profile.userData.firstname;
      // };
      // const lastname = () => {
      //   if (!store.getState().profile.profileLastname.length === '') {
      //     return store.getState().profile.profileLastname;
      //   }
      //   return store.getState().profile.userData.lastname;
      // };
      // const description = () => {
      //   if (!store.getState().profile.profileDescription.length === '') {
      //     return store.getState().profile.profileDescription;
      //   }
      //   return store.getState().profile.userData.description;
      // };
      // const birthdate = () => {
      //   if (!store.getState().profile.profileBirthdate.length === '') {
      //     return store.getState().profile.profileBirthdate;
      //   }
      //   return store.getState().profile.userData.birthdate;
      // };
      const email = store.getState().profile.profileEmail;
      const pseudo = store.getState().profile.profilePseudo;
      const firstname = store.getState().profile.profileFirstname;
      const lastname = store.getState().profile.profileLastname;
      const description = store.getState().profile.profileDescription;
      const birthdate = store.getState().profile.profileBirthdate;
      // const avatar = store.getState().profile.profileAvatar;

      axios({
        method: 'patch',
        url: `https://api.geekoz.fr/api/v1/users/${userId}`,
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
