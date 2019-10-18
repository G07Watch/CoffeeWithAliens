import React from 'react';
import {Link} from 'react-router-dom';

class UserEdit extends React.Component{
  constructor(props){
    super(props);

    this.state={
      nickname: this.props.currentUser.nickname,
      email: this.props.currentUser.email,
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      phone_number: this.props.currentUser.phone_number,
      star_system_id: this.props.currentUser.star_system_id,
      currentPassword: '',
      password: '',
      confirmPassword: '',
    }

    this.currentPassword;

    this.submitUser = this.submitUser.bind(this);
  }


  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  submitUser(e) {
    e.preventDefault();

    if(this.currentPassword === this.state.currentPassword)
    this.props.updateUser(this.state.user)
    this.props.history.push("/profile")
  }


  render(){

    return(
      <form onSubmit={this.submitUser}> 

        <div className="user-id">
          <input type="text" value={this.state.nickname} onChange={this.updateUser('nickname')}/>
          <input type="text" value={this.state.email} onChange={this.updateUser('email')}/>
        </div>

        <div className="fullname">
          <input type="text" value={this.state.first_name} onChange={this.updateUser('first_name')} />
          <input type="text" value={this.state.last_name} onChange={this.updateUser('last_name')} />
        </div>

        <div className="phone-home">
          <input type="text" value={this.state.phone_number} onChange={this.updateUser('phone_number')} />
          <select name="" id=""></select>
        </div>

        <div className="password-change">
          <input type="text" placeholder="Current password"
            value={this.state.currentPassword} onChange={this.updateUser('currentPassword')} />

          <input type="text" placeholder="New password"
            value={this.state.password} onChange={this.updateUser('password')} />

          <input type="text" placeholder="One more time!"
            value={this.state.confirmPassword} onChange={this.updateUser('confirmPassword')} />
        </div>

        <input type="submit" value="SAVE CHANGES" />

      </form>
    )


  }

}


export default UserEdit;