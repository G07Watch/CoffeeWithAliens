import { connect } from 'react-redux';
import { fetchStarSystems } from "../../actions/star_system_actions";
import { fetchHosts } from '../../actions/host_actions';
import { fetchCoffeeTimes } from '../../actions/coffee_actions';
import CoffeeSchedule from './coffee_schedule';

const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];


function compareMonths(first, second) {
  const posOne = months.indexOf(first);
  const posTwo = months.indexOf(second);

  if (posOne < posTwo){
    return -1
  }

  else {
    return 1
  }
}


const mapStateToProps = state => {

  let stars = state.entities.stars;
  let activeMonths = [];
  let coffeeTimes = state.entities.coffeeTimes && state.entities.coffeeTimes.coffee;

  if(state.entities.coffeeTimes.coffee){
   
    for (const meeting of coffeeTimes){
      if ( !activeMonths.includes(meeting.month) ){
        activeMonths.push(meeting.month)
      }
    }

  }
  
  activeMonths.sort(compareMonths);

  // let currentMonth = activeMonths;

  return({
    currentMonth: activeMonths[0],
    nextMonth: activeMonths[1],
    stars: stars,
    coffeeTimes: coffeeTimes,
    hosts: state.entities.hosts
  })

}


const mapDispatchToProps = dispatch =>{

  return({

    fetchStarSystems: () => dispatch(fetchStarSystems()),
    fetchHosts: () => dispatch(fetchHosts()),
    fetchCoffeeTimes: () => (dispatch(fetchCoffeeTimes()))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeSchedule);