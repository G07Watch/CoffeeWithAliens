import React from 'react'

import Meeting from './coffee_index_item';


class CoffeeSchedule extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchCoffeeTimes();
    this.props.fetchStarSystems();
    this.props.fetchHosts();
  }

  render(){
    let currentMonth = <p> {this.props.currentMonth} </p>;
    if (this.props.currentMonth){
      currentMonth = this.props.currentMonth;
    }

    let nextMonth = <p>{this.props.nextMonth}</p>;
    let coffeeMeets = 0 ;
    if (this.props.coffeeTimes){
      coffeeMeets = this.props.coffeeTimes;
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
  

    if (coffeeMeets&& stars.length && 
      !(Object.entries(hosts).length === 0 && 
      hosts.constructor === Object)) {

        for (const star of stars) {
          debugger
          let coffeeTimes = coffeeMeets.filter( meeting => meeting.star_system_id === star.id )
          
          if (coffeeTimes.length !=0 && hosts){
            debugger
         
          coffeeTimesArr = coffeeTimes.map( meeting => {
            debugger
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


    let currentMonthCoffeeSchedule;
    let nexMonthCoffeeSchedule;


    for (const starMeetings of starCoffeeSchedule){
      if (currentMonth === starMeetings.coffeeTimesArr[0].month) {
        currentMonthCoffeeSchedule = <div className={currentMonth}>
          {starMeetings}
        </div>
      }
    }








    return(
      <div>
        {currentMonthCoffeeSchedule}
      </div>


      // <div>
      //   < div className = "month-display-current">

      //     Month Display
      //     {currentMonth}
      //     {nextMonth}
      //     <div className = "jump">
      //       Jump
      //     </div>

      //     <div className = "star">
      //       <ul>
      //       {starCoffeeSchedule}
      //       </ul>
      //     </div>

      //   </div>


      // </div>
    )
  }

}

export default CoffeeSchedule;