/* eslint-disable linebreak-style */
// == action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const DO_LOGIN = 'DO_LOGIN';

// == action creators
// Seule utilité : simplifier la création d'action
export const changeInput = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});
