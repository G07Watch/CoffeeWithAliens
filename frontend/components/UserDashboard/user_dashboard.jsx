import React from 'react'
import {Link} from 'react-router-dom'

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
    let coffeeEvents=[];

    Object.values(this.state.userEvents).forEach(event =>{
      let eventElement;

       eventElement = <div className="event-element">
                          <div className="event-card">
                            {event.day}
                            {event.meet_date}
                            {this.time(event.start_time)}
                            {event.place}
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

  checkNotEmpty(object) {
    return (
      !jQuery.isEmptyObject(object)
    )
  }

  hasAllAttributes() {
    return (
      this.checkNotEmpty(this.state.hosts)
      && this.checkNotEmpty(this.state.userEvents)
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
      console.log(this.hasAllAttributes());
    }



    if (this.hasAllAttributes) {

      let dashIntro;
      let dashBody;
      let dashNav;

      dashNav = <div>
        <Link>QUICK LOOK</Link>
        <Link>HISTORY</Link>
        <Link>ACCOUNT DETAILS</Link>
      </div>


      dashIntro = <div className="dash-intro">
        <h1>Welcome home, {this.props.currentUser.nickname}</h1>
        <h3>What are you thankful for this cycle?</h3>
        <Link className="user-schedule" to="/coffee_schedule"> Sign up for a Coffee Time!</Link>
      </div>

      dashBody = <div className="dash-body">
        <ul>
          {this.state.coffeeEvents}
        </ul>
      </div>

      this.state.dashIntro = dashIntro;
      this.state.dashBody = dashBody;
      this.state.dashNav = dashNav;
   
    }
  }

  render(){

    // let dashIntro = <p ></p>;
    // let dashBody = <p ></p>;


    // if( this.hasAllAttributes){

    //   console.log("the attributes", this.hasAllAttributes);
    //   console.log("the events", this.state.coffeeEvents)

    //   dashIntro = <div className="dash-intro">
    //     <h1>Welcome home, {this.props.currentUser.nickname}</h1>
    //     <h3>What are you thankful for this cycle?</h3>
    //     <Link className="user-schedule" to="/coffee_schedule"> Sign up for a Coffee Time!</Link>
    //   </div>

    //   dashBody = <div className="dash-body">
    //     <ul>
    //       {this.state.coffeeEvents}
    //     </ul>
    //   </div>

    return (
      <div>
        {this.state.dashNav}
        {this.state.dashIntro}
        {this.state.dashBody}
      </div>
    )

  }
}

export default UserDashboard;