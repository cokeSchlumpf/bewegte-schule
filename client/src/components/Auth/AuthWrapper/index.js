import Component from './component';
import _ from 'lodash';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: _.get(state.toJS(), 'app.user')
  };
};

const mapDispatchToProps = (dispatch) => {
  return { };
};

const VisibleComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default VisibleComponent;
