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
    let coffeeTimes = 0 ;
    if (this.props.coffeeTimes.coffee){
      coffeeTimes = this.props.coffeeTimes.coffee;
    }
    let stars = 0;
    if (this.props.stars.stars){
      stars = this.props.stars.stars;
    }
    let hosts = 0 ;
    if(this.props.hosts){
      hosts = this.props.hosts;
      }
  
    
    let starCoffeeSchedule=[];
    let coffeeTimesArr;

    if (this.props.coffeeTimes.coffee 
      && this.props.stars.stars 
      && this.props.hosts ) {
        for (const star of stars) {
          
          coffeeTimes = coffeeTimes.filter( meeting => meeting.star_system_id === star.id )

          console.log(hosts)
          
          if (coffeeTimes.length !=0 && hosts){
          debugger
          coffeeTimesArr = coffeeTimes.map( meeting =>{
           let hostId = meeting.host_id 
           let hostName = hosts[hostId].name


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