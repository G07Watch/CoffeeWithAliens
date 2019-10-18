import React from 'react';
import {Link} from 'react-router-dom';

class UserEdit extends React.Component{
  constructor(props){
    super(props);

    this.state={
      id: this.props.currentUser.id,
      nickname: this.props.currentUser.nickname,
      email: this.props.currentUser.email,
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      phone_number: this.props.currentUser.phone_number,
      star_system_id: this.props.currentUser.star_system_id,
      password: '',
      new_password: '',
      confirm_password: '',
    }

    console.log(this.state);

    this.star;

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

    if(this.state.new_password === this.state.confirm_password){

      this.props.updateUser(this.state.user);
      this.props.history.push("/profile");
    }

    else{ this.state.errors = 'Non-matching passwords!'}
  }


  render(){
    let errors = <p></p>;
    //ERROR RENDER LOGIC

    if (Array.isArray(this.props.errors)) {
      errors = <ul className="sess-errors">
        {this.props.errors.map(
          error => (
            <p key={error} >{error}</p>)
        )}
      </ul>
      this.state.errors = errors
    }
    return(
      

      <form onSubmit={this.submitUser}> 

        <div>
          {this.state.errors}
        </div>

        <div className="user-id">
          <label>
            NICKNAME
          <input type="text" value={this.state.nickname} onChange={this.update('nickname')}/>
          </label>

          <label>
            EMAIL
          <input type="text" value={this.state.email} onChange={this.update('email')}/>
          </label>
        </div>

        <div className="fullname">
          <label>
            FIRST NAME <p>If different from nickname</p>
          <input type="text" value={this.state.first_name} onChange={this.update('first_name')} />
          </label>
          
          <label>
            LAST NAME
          <input type="text" value={this.state.last_name} onChange={this.update('last_name')} />
          </label>
        </div>

        <div className="phone-home">
          <label>
            PHONE NUMBER <p>Optional!</p>
          <input type="text" value={this.state.phone_number} onChange={this.update('phone_number')} />
          </label>

          <label>
            HOME STAR 
          <select onChange={this.update('star_system_id')} defaultValue={this.star}>
            <option disabled>Home Star System</option>
            <option value="1" id="Sol" >Sol</option>
            <option value="2" id="Alpha Centauri">Alpha Centauri</option>
            <option value="3" id="Brodo" >Brodo</option>
          </select>
          </label>
        </div>

        <div className="password-change">
          <input type="password" placeholder="Current password"
            value={this.state.currentPassword} onChange={this.update('password')} />

          <label>
            NEW PASSWORD
            <input type="password" placeholder="New password"
              value={this.state.password} onChange={this.update('new_password')} />
            </label>

            <label>
            CONFIRM NEW PASSWORD
              <input type="password" placeholder="One more time!"
              value={this.state.confirmPassword} onChange={this.update('confirm_password')} />
            </label>
        </div>

        <input type="submit" value="SAVE CHANGES" />

      </form>
    )
          


  }

}


export default UserEdit;