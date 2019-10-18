import React from 'react';
import {Link} from 'react-router-dom';

class UserEdit extends React.Component{
  constructor(props){
    super(props)
  }


  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  submitUser(e) {
    e.preventDefault();
    this.props.updateUser(this.state.user)
  }


  render(){


    return(
      <form onSubmit={this.submitUser}> 

      </form>
    )


  }

}


export default UserEdit;