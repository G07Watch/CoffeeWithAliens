import { connect } from 'react-redux';
import { fetchStarSystems } from "../../actions/star_system_actions";
import { fetchHost } from '../../actions/host_actions';
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

  let stars = state && state.entities && state.entities.stars;

  let activeMonths = [];

  let coffeeTimes = state && state.entities && state.entities.coffeeTimes;

  if(state.entities.coffeeTimes.length){
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
    coffeeTimes: coffeeTimes
  })

}


const mapDispatchToProps = dispatch =>{

  return({

    fetchStarSystems: () => dispatch(fetchStarSystems()),
    fetchHost: (id) => dispatch(fetchHost(id)),
    fetchCoffeeTimes: () => (dispatch(fetchCoffeeTimes()))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeSchedule);