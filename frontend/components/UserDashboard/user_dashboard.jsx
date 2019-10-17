import React from 'react'
import {Link} from 'react-router-dom'

class UserDashboard extends React.Component{
  constructor(props){
    super(props);

    this.buildCoffeeArr = this.buildCoffeeArr.bind(this);
    this.time = this.time.bind(this);
    this.hostPic = this.hostPic.bind(this);
  }

  componentDidMount(){
    this.props.fetchHosts();
    this.props.fetchUserCoffee(this.props.currentUser.id);
  }


  time(start) {
    const timePrint = () => {
      let timeStart = start
      let timeEnd = (start + 2)
      let timespan = `${timeStart}-${timeEnd}`

      return timespan;
    }

    return timePrint();
  }

  hostPic(id){
    switch(id){
      case 1:
        return 'haha';
      
      case 2: 
        return window.mysteryURL;

      case 3:
        return 'teehee';

      default: 
        return 'HI';
    }
  }


  buildCoffeeArr(){
    let coffeeEvents;

    Object.values(this.state.userEvents).forEach(event =>{
      let eventElement;

      this.state.hosts[event.host_id];

       <div className="event-element">
         <div className="event-card">
           {event.day}
           {event.meet_date}
           {this.time(event.start_time)}
           {event.place}
         </div>

         <div className="host-card">
           <h4>Get to know your host</h4>
            <img src={this.hostPic(event.host_id)} alt=""/>
         </div>

       </div>

    })

    this.state.coffeeEvents = coffeeEvents;

  }


  componentDidUpdate(){
    this.state.hosts = this.props.hosts;
    this.state.userEvents = this.props.userEvents; 

    this.buildCoffeeArr();
  }

  render(){

    let dashIntro = <p ></p>;
    let dashBody = <p ></p>;

    let dashNav = <div>


    </div>

      if(this.state.coffeeEvents){
        dashIntro = <div className="dash-intro">
          <h1>Welcome home, {this.props.currentUser.nickname}</h1>
          <h3>What are you thankful for this cycle?</h3>
          
        </div>

        dashBody = <div className="dash-body">

        </div>
      }


    return(
      <div>
        {dashNav}
        {dashIntro}
        <ul>
          {}
        </ul>

      </div>
    )
  }
}

export default UserDashboard;