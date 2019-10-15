import React from 'react'


class Meeting extends React.Component {

  constructor(props){
    super(props);

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
          <div className="seats"> {this.props.meeting.available_seats} seats left! </div> 
          <div className="seat-meter">
            <ul>
            {progressBar}
            </ul>
          </div>
        </div>

     </div>
    )
  }

  

}

export default Meeting;