import React from 'react'

class UserDashboard extends React.Component{
  constructor(props){
    super(props);

    this.buildCoffeeArr = this.buildCoffeeArr.bind(this);
    this.time = this.time.bind(this);
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

       </div>




    }

    )

  }


  componentDidUpdate(){
    this.state.hosts = this.props.hosts;
    this.state.userEvents = this.props.userEvents; 

    this.buildCoffeeArr();
  }

  render(){

    return(
      <div>
        USER DASHBOARD RENDERING

      </div>
    )
  }
}

export default UserDashboard;