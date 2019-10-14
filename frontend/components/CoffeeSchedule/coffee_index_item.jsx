import React from 'react'


class Meeting extends React.Component {

  constructor(props){
    super(props);


  }

  componentDidMount(){
    debugger
    let hostId = this.props.meeting.host_id;
    this.props.fetchHost(hostId);
  }


  render(){

    return (


     <div>
       {this.props.meeting.place}
       {this.props.host.name}
     </div>
    )
  }

  

}

export default Meeting;