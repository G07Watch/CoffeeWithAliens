import {connect} from 'react-redux';
import { fetchUserCoffee } from '../../actions/coffee_actions';
import UserDashboard from './user_dashboard';

const mapStateToProps = state =>{
  let currentUser = state.session && state.session.currentUser;
  let userEvents = state.session && state.session.user_coffee_times;
  return({
    hosts: state.entities.hosts,
    currentUser: currentUser,
    user_coffee_times:
  })

}

const mapDispatchToProps = dispatch =>{
  
  return({
    fetchUserCoffee: id => dispatch(fetchUserCoffee(id)),
    fetchHosts: () => dispatch(fetchHosts())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard); 