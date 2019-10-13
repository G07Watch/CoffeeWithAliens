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

      <div>
        < div className = "month-display-current">

          Month Display
          {currentMonth}
          <div className = "jump">
            Jump
          </div>

          <div className = "current">
            Current Month
          </div>
        </div>


      </div>
    )
  }

}

export default CoffeeSchedule;