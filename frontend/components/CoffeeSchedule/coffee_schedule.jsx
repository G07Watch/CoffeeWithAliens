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

    // if (this.props.stars.stars){
    //   stars = this.props.stars.stars.map( star => (
    //     <li key={star.id}>
    //       <h2 >
    //         {star.name}
    //       </h2>
    //       <ul>
          
    //       </ul>
    //     </li>
    //   ))
    // }
    
    let starCoffeeSchedule = [];
    let coffeeTimesArr;

    if (this.props.coffeeTimes.coffee && this.props.stars.stars ) {
      
      for (const star of this.props.stars.stars) {

        coffeeTimes = this.props.coffeeTimes.coffee.filter( meeting.star_system_id === star.id )
        coffeeTimesArr = coffeeTimes.map( meeting =>(
          <Meeting
            key={meeting.id}
            meeting={meeting}
            fetchHost={this.props.fetchHost}
          />
          ))
        
        starCoffeeSchedule.push(
          <li key={star.id}>
            <h2 >
              {star.name}
            </h2>
            <ul>
              {coffeeTimesArr}
            </ul>
          </li>
        )
      }
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
            {starCoffeeSchedule}
            </ul>
          </div>

        </div>


      </div>
    )
  }

}

export default CoffeeSchedule;