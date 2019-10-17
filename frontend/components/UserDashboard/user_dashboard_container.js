import {connect} from 'react-redux';
import { fetchUserCoffee } from '../../actions/coffee_actions';
import UserDashboard from './user_dashboard';

const mapStateToProps = state =>{
  let currentUser = state.session && state.session.currentUser

  return({
    hosts: state.entities.hosts,
    currentUser: currentUser
  })

}

const mapDispatchToProps = dispatch =>{
  
  return({
    fetchUserCoffee: id => dispatch(fetchUserCoffee(id)),
    fetchHosts: () => dispatch(fetchHosts())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);