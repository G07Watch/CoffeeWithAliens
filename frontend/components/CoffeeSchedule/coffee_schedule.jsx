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
    let currentMonth;
    if (this.props.currentMonth){
      currentMonth = this.props.currentMonth;
    }

    let nextMonth;
    if (this.props.nextMonth){
      nextMonth = this.props.nextMonth;
    }

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
    let currentMonthSchedule =<p></p>;
    let nexMonthSchedule=<p></p>;
    let currentMonthArr=[];
    let nextMonthArr=[];

  

    if (coffeeMeets&& stars.length && 
      !(Object.entries(hosts).length === 0 && 
      hosts.constructor === Object)) {


      for ( let meetUp of coffeeMeets) {
        if (meetUp.month === currentMonth) {
          currentMonthArr.push(meetUp);
        }

        else nextMonthArr.push(meetUp);
      };

      let count = 2;
      let monthFlag = true;

      while (count < 0){

        let monthArr;
        let month;

        if (monthFlag === true) {
          monthArr = currentMonthArr;
          month = currentMonth
        }

        else {
          monthArr = nextMonthArr;
          month = nextMonth;
        }


          for (const star of stars) {
            let coffeeTimes = monthArr.filter( meeting => meeting.star_system_id === star.id )
            
            if (coffeeTimes.length !=0 && hosts){
          
            coffeeTimesArr = coffeeTimes.map( meeting => {

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

        if (monthFlag === true){

          currentMonthSchedule = <div className={month}>
            <p>{month}Coffee Times</p>

            <div className="jump">
              Jump links
            </div>

            <div className="star">
              <ul>
                {starCoffeeSchedule}
              </ul>
            </div>

          </div>
        }

        else{
          nextMonthSchedule = <div className={month}>
            <p>{month}Coffee Times</p>

            <div className="jump">
              Jump links
            </div>

            <div className="star">
              <ul>
                {starCoffeeSchedule}
              </ul>
            </div>

          </div>
        }



        monthFlag = false;
        count--;
      }

    }    


    return(
      <div>
        {currentMonthSchedule}
        {nexMonthSchedule}
      </div>
    )
  }

}

export default CoffeeSchedule;