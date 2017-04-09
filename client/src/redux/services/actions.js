import login, { types as loginTypes } from './login/actions';
import pseudonyms, { types as pseudonymTypes } from './pseudonyms/actions';

import _ from 'lodash';

export const types = {
  login: loginTypes,
  pseudonyms: pseudonymTypes
};

export default {
  login,
  pseudonyms
};