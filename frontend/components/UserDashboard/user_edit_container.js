import { connect } from 'react-redux';
import UserEdit from './user_edit';

const mapStateToProps = state => {
  let currentUser = state.session.currentUser;
  return ({
    currentUser: currentUser,
  })

}

const mapDispatchToProps = dispatch => {

  return ({
    updateUser: (user) => dispatch(updateUser(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit); 