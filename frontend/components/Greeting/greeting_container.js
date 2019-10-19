import { connect } from 'react-redux';
import Greeting from './greeting';
import {logout} from '../../actions/session_actions';


const mapStateToProps = state => {
  let user = state.session.currentUser;
  let host = state.session.currentUser && state.session.currentUser.is_host;
  return({
    currentUser: user,
    hosting: host
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: ()=> dispatch(logout())
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);