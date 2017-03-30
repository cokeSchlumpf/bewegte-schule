import Component from './component';
import actions from '../../redux/register/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state.toJS().register;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => dispatch(actions.submit()),
    onValueChange: (value) => dispatch(actions.valueChange(value)),
  };
};

const VisibleComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default VisibleComponent;
