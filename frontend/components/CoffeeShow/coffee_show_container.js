import { connect } from 'react-redux';

const mapStateToProps = state => {

  let coffeeShow = state.entities && state.entities.coffeeTimes && state.entities.coffeeTimes.coffeeShow

  return({
    coffeeShow: coffeeShow
  })

}


const mapDispatchToProps = dispatch => {

  return({

  })

}