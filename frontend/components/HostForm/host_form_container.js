import {connect} from 'react-redux';
import { fetchUser, createHost, updateUser } from '../../actions/host_actions';
import HostForm from './host_form';

const mapStateToProps = (state) => {
  let currentUserId = state && state.session && state.session.currentUser && state.session.currentUser.id
  let errors = state.errors && state.errors.session && state.errors.session.responseText;
  return({
    errors: errors,
    currentUserId: currentUserId,
    formType: 'Host Creation'
  })

}

const mapDispatchToProps = dispatch =>{

  return({
    processHost: (host) => dispatch(createHost(host)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(HostForm);