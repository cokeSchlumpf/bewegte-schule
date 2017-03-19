import Component from './component';
import actions from '../../redux/helloworld/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state.toJS().helloworld;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeValue: (value) => dispatch(actions.updateValue(value))
  };
};

const VisibleComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default VisibleComponent;