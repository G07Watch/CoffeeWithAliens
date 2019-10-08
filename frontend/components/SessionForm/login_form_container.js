import {connect} from "react-redux";
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';


const mapStateToProps = (state) =>{
  let errors = state.errors
  return({
    errors: errors,
    formType: 'Log In'
  })
};

const mapDispatchToProps = dispatch =>{

  return({
    processForm: (user) => dispatch(login(user))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);