import {connect} from 'react-redux';
import { fetchUser, createHost, updateUser } from '../../actions/host_actions';
import HostForm from './host_form';

const mapStateToProps = (state) => {
  let currentUserId = state && state.session && state.session.currentUser && state.session.currentUser.id
  let errors = state.errors && state.errors.session && state.errors.session.responseText;
  let user = state && state.session && state.session.user;

  return({
    errors: errors,
    currentUserId: currentUserId,
    user: user,
    formType: 'Host Creation'
  })

}

const mapDispatchToProps = dispatch =>{

  return({
    fetchUser: (id) => dispatch(fetchUser(id)),
    processHost: (host) => dispatch(createHost(host)),
    updateUser: (user) => dispatch(updateUser(user))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(HostForm);