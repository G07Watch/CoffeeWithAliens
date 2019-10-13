import { connect } from 'react-redux';
import { fetchStarSystems } from "../../actions/star_system_actions";
import { fetchHost } from '../../actions/host_actions';
import { fetchCoffeeTimes } from '../../actions/coffee_actions';


const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];


function compareMonths(first, second) {
  if (months[first] < months[second]){
    return -1
  }

  else {
    return 1
  }
}


const mapStateToProps = state =>{

  let stars = state && state.stars;

  let activeMonths = [];

  let coffeeTimes = state && state.coffeeTimes;

  if(state.coffeeTimes){

    for (const meeting of coffeeTimes){
      if ( !activeMonths.includes(meeting.month) ){
        activeMonths.push(meeting.month)
      }
    }

  }

  activeMonths.sort(compareMonths);


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