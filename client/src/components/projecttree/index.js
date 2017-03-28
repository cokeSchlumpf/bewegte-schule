import Component from './component';
import actions from '../../redux/projecttree/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state.toJS().projecttree;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeValue: (value) => {
      dispatch(actions.changeValue(value))
    }
  };
};

const VisibleComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default VisibleComponent;