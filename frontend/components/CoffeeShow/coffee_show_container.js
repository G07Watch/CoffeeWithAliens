import { connect } from 'react-redux';
import { fetchCoffeeTime } from '../../actions/coffee_actions';
import { fetchHosts } from '../../actions/host_actions';
import { fetchStarSystems } from "../../actions/star_system_actions";
import CoffeeShow from './coffee_show';

const mapStateToProps = (state,ownProps) => {

  // let coffeeShowId = ownProps.match.params.id 
  let coffeeShow = state.entities && state.entities.coffeeTimes && state.entities.coffeeTimes.coffeeShow
  let stars = state.entities.stars && state.entities.stars.stars;
  return({
    // coffeeShowId: coffeeShowId,
    coffeeShow: coffeeShow,
    hosts: state.entities.hosts,
    stars: stars
  })

}


const mapDispatchToProps = dispatch => {

  return({
    fetchCoffeeTime: id => dispatch(fetchCoffeeTime(id)),
    fetchHosts: () => dispatch(fetchHosts()),
    fetchStarSystems: () => dispatch(fetchStarSystems())
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShow);