import React from 'react'


class Meeting extends React.Component {

  constructor(props){
    super(props);

  }

  
  render(){
    let timeStart = this.props.meeting.start_time
    let timeEnd = (this.props.meeting.start_time + 2)
    let timespan = `${timeStart}-${timeEnd}`
  
    let notch = <span className="notch"></span>

    let progressBar =[];
    
    let seatCount = this.props.available_seats;

    while (seatCount>0) {
      progressBar.push(notch)
      seatCount--;
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
            <span className="meter"></span>
            {progressBar}
            </ul>
          </div>
        </div>

     </div>
    )
  }

  

}

export default Meeting;