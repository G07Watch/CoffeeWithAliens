import { connect } from 'react-redux';
import UserEdit from './user_edit';
import { updateUser, cleanErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  let currentUser = state.session.currentUser;
  let errors = state.errors && state.errors.session && state.errors.session.responseJSON;
  return ({
    currentUser: currentUser,
    errors: errors
  })

}

const mapDispatchToProps = dispatch => {

  return ({
    updateUser: (user) => dispatch(updateUser(user)),
    cleanErrors: () => dispatch(cleanErrors())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit); 