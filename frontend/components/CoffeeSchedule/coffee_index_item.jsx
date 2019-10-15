import React from 'react'


class Meeting extends React.Component {

  constructor(props){
    super(props);

  }

  
  render(){
    let timespan = this.props.meeting.start_time
    // debugger
    return (
     <div className="meeting">
        <div className="host-container">{this.props.hostName}</div>
        <div className="date-time" >
          <p className="day">{this.props.meeting.day}</p>
          <br/>
          <p className="meet-date">{this.props.meeting.meet_date}</p>
          <br/>
          <p className="timespan"> {timespan}</p> 
        </div>
        <br/>
        <div className="place">
          {this.props.meeting.place}
        </div>
        <br/>
        <div className="availability">
          {this.props.meeting.available_seats} seats left!
        </div>

     </div>
    )
  }

  

}

export default Meeting;