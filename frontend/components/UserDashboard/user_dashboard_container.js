import {connect} from 'react-redux';
import { fetchUserCoffee } from '../../actions/coffee_actions';
import UserDashboard from './user_dashboard';
import { fetchHosts } from '../../actions/host_actions';

const mapStateToProps = state =>{
  let currentUser = state.session.currentUser;
  let userEvents = state.session && state.session.user_coffee_times;
  return({
    hosts: state.entities.hosts,
    currentUser: currentUser,
    userEvents: userEvents
  })

}

const mapDispatchToProps = dispatch =>{
  
  return({
    fetchUserCoffee: id => dispatch(fetchUserCoffee(id)),
    fetchHosts: () => dispatch(fetchHosts())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard); 