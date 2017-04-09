import Component from './component';
import actions from '../../redux/dashboard/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutClick: () => dispatch(actions.logoutClick()),
    onSurveyButtonClick: () => dispatch(actions.surveyRedirect())
  };
};

const VisibleComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default VisibleComponent;
