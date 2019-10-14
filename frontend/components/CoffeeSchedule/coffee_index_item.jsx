import React from 'react'


class Meeting extends React.Component {

  constructor(props){
    super(props);


  }

  componentDidMount(){
    let hostId = this.props.meeting.host_id;
    this.props.fetchHost(hostId);
  }


  render(){
    return (
     <div className="meeting">
       {this.props.meeting.place}
       {this.props.host.name}
     </div>
    )
  }

  

}

export default Meeting;