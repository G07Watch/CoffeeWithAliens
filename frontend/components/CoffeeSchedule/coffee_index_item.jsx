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
       {this.props.hostName}
     </div>
    )
  }

  

}

export default Meeting;