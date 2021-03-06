import React from 'react';
import {Link} from 'react-router-dom';

class Meeting extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hover: false
    }

    this.hover = this.hover.bind(this);
    this.hostPic = this.hostPic.bind(this);
  }

  hostPic(id) {
    switch (id) {
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

  hover(){
    this.setState({hover: !this.state.hover})
  }

  
  render(){
    let timeStart = this.props.meeting.start_time
    let timeEnd = (this.props.meeting.start_time + 2)
    let timespan = `${timeStart}-${timeEnd}`
  
    let meter = <span className="meter">" "</span>
    let notch = <span className="notch">" "</span>

    const progressBar =[];
    
    let seatCount = this.props.meeting.available_seats;
    let extraSeats = 6 - this.props.meeting.available_seats;

    
    while (seatCount > 0){
      progressBar.push(notch)
      seatCount--;
    }
    
    while (extraSeats) {
      progressBar.push(meter)
      extraSeats--;
    }

    // debugger
    return (
    <div className="schedule-card">
     <div className="meeting">
       <div className="tile-top">

        <div className="host-container">
          {this.props.hostName}

          <img className="host-image-card" src={this.hostPic(this.props.hostId)} alt="" />


        </div>

        <div className="date-time" >
          <p className="day">{this.props.meeting.day}</p>
          <p className="meet-date">{this.props.meeting.meet_date}</p>
          <p className="timespan"> {timespan}</p> 
        </div>

       </div>
        <br/>
        <div className="place">
          {this.props.meeting.place}
        </div>
        <br/>
        <div className="availability">
          <div className="seats"> {this.props.meeting.available_seats} seats left! </div> 
          <div className="seat-meter">
            <ul>
            {progressBar}
            </ul>
          </div>
        </div>
      </div>
        <div>

          <Link className="coffee-show-link" to={`/coffee_show/${this.props.meeting.id}`} >

          < input type="button" className={this.state.hover ? "coffee-show-hover" : "coffee-show-norm" }
            value={this.state.hover ? "Check it out →" : "Count me in"}
            onMouseEnter={this.hover}
            onMouseLeave={this.hover}/>
          </Link>

        </div>
    </div>
    )
  }

  

}

export default Meeting;