import { Children, PropTypes } from 'react';

import _ from 'lodash';
import authActions from '../../../redux/login/actions';

const CheckAuth = ({ children, hasRole }, { auth, store }) => {
  let result;

  if (auth.isAuthenticated()) {
    if (hasRole && !auth.hasRole(hasRole)) {
      result = auth.redirectUnauthorized();
    }
    else {
      result = Children.only(children);
    }
  } else {
    const loginRedirectTo = _.get(store.getState().toJS(), 'router.location.pathname', '/');
    setTimeout(() => store.dispatch(authActions.loginRedirectTo(loginRedirectTo)), 500);
    result = auth.redirectLogin();
  }

  return result;
}

CheckAuth.contextTypes = {
  auth: PropTypes.object,
  store: PropTypes.object
}

CheckAuth.propTypes = {
  hasRole: PropTypes.arrayOf(PropTypes.string)
}

export default CheckAuth;
