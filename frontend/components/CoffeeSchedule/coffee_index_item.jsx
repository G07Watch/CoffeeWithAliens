import React from 'react'


class Meeting extends React.Component {

  constructor(props){
    super(props);


  }

  componentDidMount(){
    hostId = this.props.meeting.host_id;
    this.props.fetchHost(hostId);
  }


  render(){

    return (


     <div>
       {this.props.meeting.place}
       {this.props.meeting.host_id}
     </div>
    )
  }

  

}

export default Meeting;