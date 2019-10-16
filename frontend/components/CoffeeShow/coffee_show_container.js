import { connect } from 'react-redux';
import { fetchCoffeeTime } from '../../actions/coffee_actions';
import { fetchHosts } from '../../actions/host_actions';
import CoffeeShow from './coffee_show';

const mapStateToProps = (state,ownProps) => {

  // let coffeeShowId = ownProps.match.params.id 
  let coffeeShow = state.entities && state.entities.coffeeTimes && state.entities.coffeeTimes.coffeeShow

  return({
    // coffeeShowId: coffeeShowId,
    coffeeShow: coffeeShow,
    hosts: state.entities.hosts
  })

}


const mapDispatchToProps = dispatch => {

  return({
    fetchCoffeeTime: id => dispatch(fetchCoffeeTime(id)),
    fetchHosts: () => dispatch(fetchHosts())
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShow);