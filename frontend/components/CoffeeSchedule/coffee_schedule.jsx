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
    let currentMonth = <p> {this.props.currentMonth} </p>;
    let nextMonth = <p>{this.props.nextMonth}</p>;
    let coffeeTimes = <p></p>;
    
    let starCoffeeSchedule=[];
    let coffeeTimesArr;

    if (this.props.coffeeTimes.coffee 
      && this.props.stars.stars 
      && this.props.hosts ) {
      debugger
      for (const star of this.props.stars.stars) {

        coffeeTimes = this.props.coffeeTimes.coffee.filter( meeting => meeting.star_system_id === star.id )
        
        if (coffeeTimes.length != 0 && this.props.hosts[0].name ){
          coffeeTimesArr = coffeeTimes.map( meeting =>{
           let hostId = meeting.host_id 
           let hostName = this.props.hosts[hostId].name


          return(
          <Meeting
            key={meeting.id}
            meeting={meeting}
            hostName={hostName}
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