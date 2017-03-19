import Component from './component';
import actions from '../../redux/projectselection/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state.toJS().projectselection;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeRepositorytype: (repositorytype) => dispatch(actions.changeRepositorytype(repositorytype)),
    onChangeValue: (event) => dispatch(actions.changeValue(event.target.value)),
    onClickLoad: () => dispatch(actions.clickLoad())
  };
};

const VisibleComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default VisibleComponent;