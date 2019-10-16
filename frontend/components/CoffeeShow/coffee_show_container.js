import { connect } from 'react-redux';
import { fetchCoffeeTime } from '../../actions/coffee_actions';
import { fetchHost } from '../../actions/host_actions';

const mapStateToProps = state => {

  let coffeeShow = state.entities && state.entities.coffeeTimes && state.entities.coffeeTimes.coffeeShow

  return({
    coffeeShow: coffeeShow,
    hosts: state.entities.hosts
  })

}


const mapDispatchToProps = dispatch => {

  return({
    fetchCoffeeTime: id => dispatch(fetchCoffeeTime(id)),
    fetchHosts: (id) => dispatch(fetchHost(id))
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShow);