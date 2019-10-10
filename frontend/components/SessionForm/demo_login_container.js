import {connect} from "react-redux";
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';


const mapStateToProps = (state,ownProps) =>{
let errors = state.errors && state.errors.session && state.errors.session.responseText;

  return({
    errors: errors,
    formType: 'Demo Log In',
  })
  }


const mapDispatchToProps = dispatch =>{

  return({
    processForm: (user) => dispatch(login(user))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);