import React from 'react'


class Meeting extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){

  }


  render(){

    return (
     <div>
       {this.props.meeting.place}
     </div>
    )


  }

  

}

export default Meeting;