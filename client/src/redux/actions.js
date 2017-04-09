import app, { types as appTypes } from './app/actions';
import dashboard, { types as dashboardTypes } from './app/actions';
import login, { types as loginTypes } from './login/actions';
import register, { types as registerTypes } from './register/actions';
import services, { types as servicesTypes } from './services/actions';

export const types = {
  app: appTypes,
  dashboard: dashboardTypes,
  login: loginTypes,
  register: registerTypes,
  services: servicesTypes
}

export default {
  app,
  dashboard,
  login,
  register,
  services
}