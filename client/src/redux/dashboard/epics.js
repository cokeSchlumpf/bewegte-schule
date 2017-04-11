import { surveyRedirect, timerStarted, types } from './actions';

import { LOCATION_CHANGE } from 'react-router-redux';
import _ from 'lodash';

const surveyUrl = (pseudonym) => `https://docs.google.com/forms/d/e/1FAIpQLSc2JN79usKCCPO1MpLhzEjtYnNxl413q2_uUUv7ezOsdhuaSQ/viewform?usp=pp_url&entry.1530647134=${pseudonym}`;
let timer;

export const initEpic = (action$, store$) => action$
  .ofType(LOCATION_CHANGE)
  .filter(action => _.get(action, 'payload.pathname', '') === '/')
  .map(action => {
    timer = setTimeout(() => store$.dispatch(surveyRedirect()), 10 * 1000);
    return timerStarted();
  });

export const logoutEpic = (action$) => action$
  .ofType(types.LOGOUT_CLICK)
  .filter(action => {
    clearTimeout(timer);
    window.open('/api/logout', '_self');
    return false;
  });

export const redirectEpic = (action$, store$) => action$
  .ofType(types.SURVEY_REDIRECT)
  .filter(action => {
    clearTimeout(timer);
    const url = surveyUrl(_.get(store$.getState().toJS(), 'app.user.pseudonym'));
    window.open(url, '_blank');
    return false;
  });

export default [
  initEpic,
  logoutEpic,
  redirectEpic
];