import React from 'react'


class Meeting extends React.Component {

  constructor(props){
    super(props);

  }

  
  render(){
    let timeStart = this.props.meeting.start_time

     let timeEnd = this.props.meeting.start_time + 2

     let timespan = `${timeStart}-${timeEnd}`


    // debugger
    return (
     <div className="meeting">
       <div className="tile-top">

        <div className="host-container">{this.props.hostName}</div>

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
          {this.props.meeting.available_seats} seats left!
        </div>

     </div>
    )
  }

  

}

export default Meeting;