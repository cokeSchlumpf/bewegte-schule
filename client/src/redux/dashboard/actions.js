import constantsFromArray from '../../utils/constants-from-array';

export const types = constantsFromArray([
  'LOGOUT_CLICK',
  'SURVEY_REDIRECT',
  'TIMER_STARTED'
], 'DASHBOARD_');

export const logoutClick = () => (
  { type: types.LOGOUT_CLICK, payload: { } }
);

export const surveyRedirect = () => (
  { type: types.SURVEY_REDIRECT, payload: { } }
);

export const timerStarted = () => (
  { type: types.TIMER_STARTED, payload: { } }
);

export default {
  logoutClick,
  surveyRedirect,
  timerStarted
};
