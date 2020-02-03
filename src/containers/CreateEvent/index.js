/* eslint-disable linebreak-style */
// Ici, le container du composant Signin à compléter
import { connect } from 'react-redux';

import CreateEvent from 'src/components/CreateEvent';

// == Import d'action creators
import {
  changeFieldValue,
  goCreateEvent,
  checkForEmptyFields,
  getCoordinates,
  getLongitude,

} from 'src/store/reducer/createEvent';

// == Préparation: data
const mapStateToProps = (state) => ({
  title: state.createEvent.title,
  typeEvent: state.createEvent.typeEvent,
  description: state.createEvent.description,
  dateEvent: state.createEvent.dateEvent,
  painfulness: state.createEvent.painfulness,
  duration: state.createEvent.duration,
  impactSocietal: state.createEvent.impactSocietal,
  impactEnvironmental: state.createEvent.impactEnvironmental,
  userMin: state.createEvent.userMin,
  userMax: state.createEvent.userMax,
  city: state.createEvent.city,
  latitude: state.createEvent.latitude,
  longitude: state.createEvent.longitude,
  author: state.createEvent.author,
  statusText: state.createEvent.statusText,
  emptyFieldsCounter: state.signup.emptyFields,
  logged: state.login.logged,
  address: state.createEvent.address,
});

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  onCreateEventFieldChange: (name, value) => {
    console.log('hello depuis mDTP', name, value);
    dispatch(changeFieldValue(name, value));
  },

  getCreateEvent: () => {
    // console.log('Hello depuis mDtP, je vais ajouter un event');
    dispatch((goCreateEvent()));
  },
  onCheckForEmptyFields: () => {
    // console.log('hello depuis mDtP, je check les champs vides');
    dispatch(checkForEmptyFields());
  },
  onGetCoordinates: (lat, lng) => {
    dispatch(getCoordinates(lat, lng));
  },
});

// == Container
const CreateEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateEvent);

// == Export
export default CreateEventContainer;
