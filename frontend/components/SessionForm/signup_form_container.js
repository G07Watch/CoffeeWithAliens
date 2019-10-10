import {connect} from "react-redux";
import SessionForm from './session_form';
import {signup} from '../../actions/session_actions';
import {fetchStarSystems} from '../../actions/star_system_actions';

const mapStateToProps = (state) =>{
  let errors = state.errors && state.errors.session && state.errors.session.responseJSON;
// let starSystems = state.entities.starSystems;
  return({
    errors: errors,
    formType: 'Sign Up',
    // starSystems: starSystems
  })
};

const mapDispatchToProps = dispatch => {

  return({
    processForm: (user) => dispatch(signup(user)),
    // fetchStarSystems: () => dispatch(fetchStarSystems())
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);