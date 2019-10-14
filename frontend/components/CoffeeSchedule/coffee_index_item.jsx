import React from 'react'


class Meeting extends React.Component {

  constructor(props){
    super(props);

  }

  
  render(){
    let timespan = this.props.meeting.start_time
    debugger
    return (
     <div className="meeting">
        <div className="host-container">{this.props.hostName}</div>
        <div className="date-time" >
          {this.props.meeting.day}
          {this.props.meeting.meet_date}
          {timespan}
        </div>
        <div className="place">
          {this.props.meeting.place}
        </div>
        <div className="availability">
          {this.props.meeting.available_seats}
        </div>

     </div>
    )
  }

  

}

export default Meeting;