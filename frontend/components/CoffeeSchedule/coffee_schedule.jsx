import React from 'react'

import Meeting from './coffee_index_item';


class CoffeeSchedule extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchStarSystems();
    this.props.fetchCoffeeTimes();
  }

  render(){

    // debugger
    let currentMonth = <p> {this.props.currentMonth} </p>;
    let nextMonth = <p>{this.props.nextMonth}</p>;
    let coffeeTimes = <p></p>;
    let stars = <p></p>;
    console.log(this.props.stars);
    console.log(this.props.coffeeTimes);

    if (this.props.coffeeTimes.length) {
      coffeeTimes = this.props.coffeeTimes.map(meeting =>

        <Meeting
          key={meeting.id}
          meeting={meeting}
          fetchHost={this.props.fetchHost}
        />

      )
    }

    if (this.props.stars.length){
      stars = stars.map( star => (
        <li>
          <h2 key={star.id}>
            {star.name}
          </h2>
          <ul>
            { coffeeTimes.filter( coffeeTime => coffeeTime.star_system_id === star.id ) }
          </ul>
        </li>
      ))
    }


    

    return(

      <div>
        < div className = "month-display-current">

          Month Display
          {currentMonth}
          {nextMonth}
          <div className = "jump">
            Jump
          </div>

          <div className = "star">
            <ul>
            {stars}
            </ul>
          </div>

        </div>


      </div>
    )
  }

}

export default CoffeeSchedule;