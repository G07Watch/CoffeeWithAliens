import React from 'react'

import Meeting from './coffee_index_item';


class CoffeeSchedule extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchStarSystems();
    this.props.fetchCoffeeTimes();
    this.props.fetchHosts();
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

        coffeeTimes = this.props.coffeeTimes.coffee.filter( meeting => meeting.star_system_id === star.id )
        
        console.log(this.props.host.host && this.props.host.host.name)
        if (coffeeTimes.length != 0){
        coffeeTimesArr = coffeeTimes.map( meeting =>{
          return(
          <Meeting
            key={meeting.id}
            meeting={meeting}
            host ={this.props.host}
            fetchHost={this.props.fetchHost}
          />)
        })

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