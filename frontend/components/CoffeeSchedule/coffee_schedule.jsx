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
    let nextMonth = <p>{this.props.nextMonth}</p>;
    let coffeeTimes = <p></p>;
    if (this.props.coffeeTimes.length) {
      coffeeTimes = this.props.coffeeTimes.map( meeting =>
        <p key={meeting.id}>{meeting}</p>
      )}
     // .star to sort

    return(

      <div>
        < div className = "month-display-current">

          Month Display
          {currentMonth}
          {nextMonth}
          <div className = "jump">
            Jump
          </div>

          <div className = "current">
            Current Month
            <ul>
            {coffeeTimes}
            </ul>

          </div>
        </div>


      </div>
    )
  }

}

export default CoffeeSchedule;