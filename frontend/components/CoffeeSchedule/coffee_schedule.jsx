import React from 'react'
import { Link, Route } from 'react-router-dom'
import Meeting from './coffee_index_item';


class CoffeeSchedule extends React.Component{

  constructor(props){
    super(props)
    this.state={
      display: true
    };
    this.createLink = this.createLink.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    this.props.fetchCoffeeTimes();
    this.props.fetchStarSystems();
    this.props.fetchHosts();
  }


  update(){
    this.setState({display: !this.state.display});
  }

  createLink(name, key){
    return (<Link key={key} to={`/coffee_schedule/#${name}`}>{name}</Link>)
  }


  render(){
    let currentMonth="";
    if (this.props.currentMonth){
      currentMonth = this.props.currentMonth;
    }

    let nextMonth="";
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
  
    
    let starCoffeeScheduleOne=[];
    let starCoffeeScheduleTwo=[];
    let coffeeTimesArr;
    let currentMonthSchedule =<p></p>;
    let nextMonthSchedule=<p></p>;
    let currentMonthArr=[];
    let nextMonthArr=[];
    let currentStars=[];
    let nextStars=[];
  

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

      while (count > 0){

        let monthArr;
        let month;
        let meetStars;

        if (monthFlag === true) {
          monthArr = currentMonthArr;
          month = currentMonth;
          meetStars = currentStars;
        }

        else {
          monthArr = nextMonthArr;
          month = nextMonth;
          meetStars = nextStars;
        }


          for (const star of stars) {
            let coffeeTimes = monthArr.filter( meeting => meeting.star_system_id === star.id )
            
            if (coffeeTimes.length !=0 && hosts){
              meetStars.push(star)
          
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

          
          if (monthFlag === true){

            starCoffeeScheduleOne.push(
              <li key={star.id}>
                <div className="schedule-tile">
                  <a name={`/coffee_schedule/#${star.name}`}></a>
                  <h2 name={star.name}>
                    {star.name}
                    <br/>
                    👉
                  </h2>
                </div>
                <div className="schedule-tile">
                  <ul>
                    {coffeeTimesArr}
                  </ul>
                </div>
            </li>
            )
          }


          else{
            starCoffeeScheduleTwo.push(
              <li key={star.id}>
                <div className="schedule-tile">
                  <a name={`/coffee_schedule/#${star.name}`}></a>
                  <h2 name={star.name} >
                    {star.name}
                    <br />
                      👉
                  </h2>
                </div>

                <div className="schedule-tile">
                  <ul>
                    {coffeeTimesArr}
                  </ul>
                </div>
              </li>
            )
          }

          }
        }

        if (monthFlag === true) {

          let currentStarsLinks = currentStars.map(star =>(
            this.createLink(star.name, star.id)
            ))


          currentMonthSchedule = <div className={month}>
            <div className="month-header" >
              <p key="c-f1"> 📅 {month} Coffee Times</p>
              <input className="display-button"
                key="ds1"
                type="button"
                value={this.state.display ? `${nextMonth}'s Schedule` : `${currentMonth}'s Schedule`}
                onClick={this.update} />
            </div>
            <div className="jump">
              Jump to your star system's coffee times
              <ul>{currentStarsLinks}</ul>
            </div>

            <div className="star">
              <ul>
                {starCoffeeScheduleOne}
              </ul>
            </div>

          </div>
        }

        else {
          
          let nextStarsLinks = nextStars.map(star => (
            this.createLink(star.name, star.id)
          ))

          nextMonthSchedule = <div className={month}>
            <div className="month-header" >
              <p key="c-f2"> 📅 {month} Coffee Times</p>
              <input className="display-button"
                key="ds2"
                type="button"
                value={this.state.display ? `${nextMonth}'s Schedule` : `${currentMonth}'s Schedule`}
                onClick={this.update} />
            </div>
            <div className="jump">
              Jump to your star system's coffee times
              <ul>{nextStarsLinks}</ul>
           </div>

            <div className="star">
              <ul>
                {starCoffeeScheduleTwo}
              </ul>
            </div>

          </div>

        }
        
        monthFlag = false;
        count--;
      }

    }    

    return(
      <div className="toggleDisplay">
        
        <div className="coffee-intro">
          <h1>
            Coffee With Aliens is coffee, with aliens 
          </h1>

          <p>
            For .083 of an Earth cycle, five aliens and their host(no
            not that kind) sit to converse.  Perhaps a tad strange, 
            but we're fostering galactic goodwill.

            If you are already preoccupied during all of the given times,
            sign up and we'll email you when the next month in the annual
            sequence is available.  Also, feel free to apply to be a Host!
          </p>

      </div>
        <div className={this.state.display ? "current-month-show" : "current-month-hide" }>
        {currentMonthSchedule}</div>
        <div className={this.state.display ? "next-month-hide" : "next-month-show" }>
        {nextMonthSchedule}</div>
      </div>
    )
  }

}

export default CoffeeSchedule;