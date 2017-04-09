import { keepState, mergePayloadIn } from '../../utils/redux-state-func'

import _ from 'lodash';
import { fromJS } from 'immutable';
import { types as serviceTypes } from '../services/actions';
import { types } from './actions';

export const initialState = fromJS({
  errors: {
    code: undefined,
    login: undefined
  }, 
  isLoading: {
    code: undefined,
    login: undefined
  },
  loginSuccesRoute: '/',
  registerSuccess: false,
  user: undefined,
  value: {
    code: '',
    password: '',
    pseudonym: ''
  }
});

const createpseudonymClick = keepState;

const loginClick = keepState;

const valueChange = mergePayloadIn('value');

const loginLogin = (state, payload) => {
  return state.mergeIn(['isLoading'], {
    login: true
  });
};

const loginLoginFail = (state, payload) => {
  let message;

  message = 'Fehler aufgetreten!';
  
  switch (_.get(payload, 'error.messageKey', 0)) {
    case 6:
    case 7:
       message = 'Pseudonym oder Passwort falsch.'
       break;
    case 8:
      message = 'Das Pseudonym ist gesperrt. Das Passwort wurde zu oft falsch eingegeben. Bitte wende dich die Studienleitung.'
      break;
    default:
      message = 'Bei der Anmeldung ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.'
      break;
  }

  return state
    .mergeIn(['errors'], {
      login: message
    })
    .mergeIn(['isLoading'], {
      login: false
    })
    .mergeIn(['value'], {
      password: undefined
    });
};

const loginLoginSuccess = (state, payload) => {
  return initialState.merge(payload);
};

const pseudonymsCreate = (state, payload) => {
  return state.mergeIn(['isLoading'], {
    code: true
  });
};

const pseudonymsCreateFail = (state, payload) => {
  let message;

  if (_.get(payload, 'error.messageKey') === 1) {
    message = 'Der angegebene Code ist leider falsch.';
  } else {
    message = 'Leider ist ein Fehler aufgetreten, bitte versuche es noch einmal.';
  }

  return state
    .mergeIn(['errors'], {
      code: message
    })
    .mergeIn(['isLoading'], {
      code: false
    });
};

const pseudonymsCreateSuccess = () => initialState;

const pseudonymsUpdateSuccess = (state, payload) => {
  return state
    .merge({
      registerSuccess: true
    })
    .mergeIn(['value'], {
      pseudonym: payload.pseudonym
    });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATEPSEUDONYM_CLICK:
      return createpseudonymClick(state, action.payload);

    case types.LOGIN_CLICK:
      return loginClick(state, action.payload);

    case types.VALUE_CHANGE:
      return valueChange(state, action.payload);

    case serviceTypes.login.LOGIN:
      return loginLogin(state, action.payload);

    case serviceTypes.login.LOGIN_FAIL:
      return loginLoginFail(state, action.payload);

    case serviceTypes.login.LOGIN_SUCCESS:
      return loginLoginSuccess(state, action.payload);

    case serviceTypes.pseudonyms.CREATE:
      return pseudonymsCreate(state, action.payload);

    case serviceTypes.pseudonyms.CREATE_FAIL:
      return pseudonymsCreateFail(state, action.payload);

    case serviceTypes.pseudonyms.CREATE_SUCCESS:
      return pseudonymsCreateSuccess(state, action.payload);

    case serviceTypes.pseudonyms.UPDATE_SUCCESS:
      return pseudonymsUpdateSuccess(state, action.payload);

    default:
      return state;
  }
};
