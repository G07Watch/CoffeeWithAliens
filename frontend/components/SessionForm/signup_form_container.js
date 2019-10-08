import {connect} from "react-redux";
import SessionForm from './session_form';
import {signup} from '../../actions/session_actions';


const mapStateToProps = (state) =>{
  let errors = state.errors;
  return({
    errrors: errors,
    formType: 'Sign Up'
  })
};

const mapDispatchToProps = dispatch => {

  return({
    processForm: (user) => dispatch(signup(user))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);