import React from 'react'


class CoffeeSchedule extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    let stars = this.props.stars;
    let currentMonth = this.props.currentMonth;
    let nextMonth = this.props.nextMonth;
    let coffeeTimes = this.props.coffeeTimes // .star to sort





    return(
      < div className = "month-display">
        Month Display

        <div className = "jump">
          Jump
        </div>

        <div className = "currentMonth">
          Current Month
        </div>

      </div>
    )
  }

}

export default CoffeeSchedule;