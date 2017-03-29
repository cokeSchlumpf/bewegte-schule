import Component from './component';
import React from 'react';
import actions from '../../redux/login/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state.toJS().login;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreatepseudonymClick: () => dispatch(actions.createpseudonymClick()),
    onLoginClick: () => dispatch(actions.loginClick()),
    onValueChange: (value) => dispatch(actions.valueChange(value)),
  };
};

const VisibleComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default VisibleComponent;
