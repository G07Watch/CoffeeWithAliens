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

    this.star;

    this.currentPassword;

    this.submitUser = this.submitUser.bind(this);

    switch(this.state.star_system_id){
      case 1:
        this.star = 'Sol';
        return;
      
      case 2:
        this.star = 'Alpha Centauri';
        return;
      
      case 3:
        this.star = 'Brodo';
        return;

      default:
          return;
    }

  }


  componentDidMount(){


  }


  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  submitUser(e) {
    e.preventDefault();

    // if(this.currentPassword === this.state.currentPassword)
    this.props.updateUser(this.state.user)
    this.props.history.push("/profile")
  }


  render(){

    return(
      <form onSubmit={this.submitUser}> 

        <div className="user-id">
          <input type="text" value={this.state.nickname} onChange={this.update('nickname')}/>
          <input type="text" value={this.state.email} onChange={this.update('email')}/>
        </div>

        <div className="fullname">
          <input type="text" value={this.state.first_name} onChange={this.update('first_name')} />
          <input type="text" value={this.state.last_name} onChange={this.update('last_name')} />
        </div>

        <div className="phone-home">
          <input type="text" value={this.state.phone_number} onChange={this.update('phone_number')} />
          <select onChange={this.update('star_system_id')} defaultValue={this.star}>
            <option disabled>Home Star System</option>
            <option value="1" id="Sol" >Sol</option>
            <option value="2" id="Alpha Centauri">Alpha Centauri</option>
            <option value="3" id="Brodo" >Brodo</option>
          </select>
        </div>

        <div className="password-change">
          {/* <input type="password" placeholder="Current password"
            value={this.state.currentPassword} onChange={this.update('currentPassword')} /> */}

          <input type="password" placeholder="New password"
            value={this.state.password} onChange={this.update('password')} />

          <input type="password" placeholder="One more time!"
            value={this.state.confirmPassword} onChange={this.update('confirmPassword')} />
        </div>

        <input type="submit" value="SAVE CHANGES" />

      </form>
    )


  }

}


export default UserEdit;