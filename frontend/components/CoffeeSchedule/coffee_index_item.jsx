import React from 'react'


class Meeting extends React.Component {

  constructor(props){
    super(props);

  }

  
  render(){

    //   let name;
    // if () name = this.props.host.host.name

    return (
     <div className="meeting">
       {this.props.meeting.place}
       {this.props.meeting.day}
       {this.props.meeting.meet_date}
       {this.props.start_time}
       {this.props.hostName}
       {this.meeting.available_seats}
     </div>
    )
  }

  

}

export default Meeting;