import React from 'react'
import {Link} from 'react-router-dom'
import UserEdit from './user_edit';

class UserDashboard extends React.Component {
  constructor(props){
    super(props);

    this.state={
      userEvents: {},
      hosts: {},
      dashNav : <p></p>,
      dashIntro : <p></p>,
      dashBody : <p></p>
    };

    this.buildCoffeeArr = this.buildCoffeeArr.bind(this);
    this.time = this.time.bind(this);
    this.hostPic = this.hostPic.bind(this);
  }

  componentDidMount(){
    this.props.fetchHosts()
    this.props.fetchUserCoffee(this.props.currentUser.id)
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
        return window.garvinURL;
      
      case 2: 
        return window.etURL;
      
      case 3:
        return window.mysteryURL;

      default: 
        return null;
    }
  }

  


  buildCoffeeArr(){
    let coffeeEvents;
    
    if(this.checkNotEmpty(this.state.userEvents)){
      coffeeEvents = [];
      let count = 135;

      Object.values(this.state.userEvents).forEach(event =>{
        let eventElement;
        count++;
        eventElement = <div key={count} className="event-element">
                          <div className="event-card">
                            <h4>{event.day}</h4> 
                            <h2>{event.meet_date}</h2>
                            <h2>{this.time(event.start_time)}</h2>
                            <h4>{event.place}</h4>    
                          </div>

                          <div className="host-card">
                              <h4>Get to know your host</h4>
                              <img src={this.hostPic(event.host_id)} alt=""/>
                              <p>
                                Keep an eye open for {this.state.hosts[event.host_id].name}! So it's easier to
                                find them, here's what they look like. ☻
                              </p>
                          </div>

                        </div>

    coffeeEvents.push(eventElement);
    
    })
      this.state.coffeeEvents = coffeeEvents;
  }


  }

  checkNotEmpty(object) {
    return (
      !jQuery.isEmptyObject(object)
    )
  }

  hasAllAttributes() {
    return (
      this.checkNotEmpty(this.state.hosts)
      // && this.checkNotEmpty(this.state.userEvents)
    )
  }


  componentDidUpdate(){
    
    if(this.props.hosts){
      this.state.hosts = this.props.hosts
    }

    if(this.props.userEvents){
      this.state.userEvents = this.props.userEvents
    }

    if (this.hasAllAttributes()){
      this.buildCoffeeArr();
    }



  }

  render(){
    

    if (this.props.hosts) {
      this.state.hosts = this.props.hosts
    }

    if (this.props.userEvents) {
      this.state.userEvents = this.props.userEvents
    }

    if (this.hasAllAttributes()) {
      this.buildCoffeeArr();
    }



    if (this.hasAllAttributes()) {
      let dashBody;
      let dashIntro;
      let dashNav;

      dashNav = <div className="dash-nav">
        <div className="nav-block">
          <Link to="/profile">QUICK LOOK</Link>
          {/* <Link to="/profile">HISTORY</Link> */}
          <Link to="/user/edit">ACCOUNT DETAILS</Link>
        </div>
      </div>


      dashIntro = <div className="dash-intro">
        <h1>Welcome home, {this.props.currentUser.nickname}</h1>
        <h3>What are you thankful for this cycle?</h3>
        <Link className="user-schedule" to="/coffee_schedule"> Sign up for a Coffee Time!</Link>
      </div>

      if (this.state.coffeeEvents){        
        dashBody = <div className="dash-body">
        <h1>Coffee times you're attending</h1>
        <ul>
          {this.state.coffeeEvents}
        </ul>
      </div>
      }

      else{
        dashBody = <div className="dash-body">
          <h1>
            You have no coffee times coming up!
            Let's change that.
          </h1>
          <ul>
            <li>
              <Link className="blank-coffee" to="/coffee_schedule">
                <h1>+</h1>  
                <h3>JOIN A COFFEE TIME</h3>
              </Link>
            </li>
          </ul>
        </div>
      }

      this.state.dashIntro = dashIntro;
      this.state.dashBody = dashBody;
      this.state.dashNav = dashNav;


      // if (document.location.hash = "#/users/edit") {
      //   dashBody = <UserEdit
      //     currentUser={this.props.currentUser}
      //     updateUser={this.props.updateUser}
      //   />
      //   this.state.dashBody = dashBody
      // }

    }
    

    

      return (
      <div className="dashboard" >
        {this.state.dashNav}
        <div className="dash-clipboard">
          {this.state.dashIntro}
          {this.state.dashBody}
        </div>
        
      </div>
    )
    
  }
}

export default UserDashboard;