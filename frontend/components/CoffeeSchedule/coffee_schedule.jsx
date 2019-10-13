import React from 'react'


class CoffeeSchedule extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchStarSystems();
    this.props.fetchCoffeeTimes();
  }

  render(){
    debugger

    let stars = this.props.stars;
    let currentMonth = <p> {this.props.currentMonth} </p>;
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
            <ul>
            {/* {coffeeTimes} */}
            </ul>

          </div>
        </div>


      </div>
    )
  }

}

export default CoffeeSchedule;