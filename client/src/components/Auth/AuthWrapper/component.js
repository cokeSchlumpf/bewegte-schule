import React, { Children, PropTypes } from 'react';

import { Redirect } from 'react-router-dom';
import _ from 'lodash';

export default class AuthWrapper extends React.Component {
  static childContextTypes = {
    auth: PropTypes.object
  }

  static defaultProps = {
    loader: <div>Laden LADEN LADEN!</div>,
    login: '/login',
    unauthorized: '/unauthorized'
  }

  static propTypes = {
    loader: PropTypes.element,
    login: PropTypes.string,
    unauthorized: PropTypes.string,
    user: PropTypes.object
  }

  getChildContext() {
    const user = this.props.user || {};

    const hasRole = (role) => {
      let result = false;

      if (_.isString(role)) {
        result = _.findIndex(_.get(user, 'roles', []), r => _.isEqual(r, role)) > -1;
      } else if (_.isArray(role)) {
        result = _.findIndex(role, hasRole) > -1;
      }

      return result;
    };

    return {
      auth: {
        isInitialized: () => _.isObject(this.props.user),
        isAuthenticated: () => !_.isUndefined(user.pseudonym),
        hasRole,
        redirectLogin: () => <Redirect to={this.props.login} />,
        redirectUnauthorized: () => <Redirect to={this.props.unauthorized} />,
        user
      }
    };
  }

  render() {
    const context = this.getChildContext();
    let component;
    
    if (!context.auth.isInitialized()) {
      component = this.props.loader;
    } else {
      component = Children.only(this.props.children);
    }

    return component;
  }
}