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

      let name;
    if (this.props.host.host && this.props.host.host.name) name = this.props.host.host.name

    return (
     <div className="meeting">
       {this.props.meeting.place}
       {name}
     </div>
    )
  }

  

}

export default Meeting;