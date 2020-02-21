/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
// == Imports: npm
import axios from 'axios';

// == Import d'actions
import {
  FETCH_USER_DATA, storeUserData, preserveUserData, PRESERVE_USER_DATA,
} from 'src/store/reducer/profile';

// == Le middleware

const userDataMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_DATA: {
      const token = localStorage.getItem('token');
      axios({
        method: 'get',
        url: `https://api.ozone.best/api/v1/users/${store.getState().profile.userId}`,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          // console.log(response.data);
          // Je stocke les infos du user dans le state
          store.dispatch(storeUserData(response.data));
          // Je lance la requête qui va stocker les données dans App à son initialisation
          store.dispatch(preserveUserData(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
      break;
    case PRESERVE_USER_DATA:
      {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        axios({
          method: 'get',
          url: `https://api.ozone.best/api/v1/users/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            // console.log(response.data);
            // Je stocke les infos du user dans le state
            store.dispatch(storeUserData(response.data));
            // Manip pour donner en valeur de départ aux champs du form les data de l'api
            store.getState().profile.profilePseudo = response.data.pseudo;
            store.getState().profile.profileEmail = response.data.email;
            store.getState().profile.profileLastname = response.data.lastname;
            store.getState().profile.profileFirstname = response.data.firstname;
            store.getState().profile.profileDescription = response.data.description;
            store.getState().profile.profileBirthdate = response.data.birthdate;
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
export default userDataMiddleware;
