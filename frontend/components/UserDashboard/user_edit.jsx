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
      is_host: this.props.currentUser.is_host,
      password: '',
      new_password: '',
      confirm_password: '',
    }

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
      this.props.cleanErrors();
      this.state.errors = null;
    }
  }

  submitUser(e) {
    e.preventDefault();

    if(this.state.new_password === this.state.confirm_password){

      this.props.updateUser(this.state)
      
      setTimeout( ()=>{
      if(this.props.errors){
        this.setState({ errors: this.props.errors })
        window.alert(this.props.errors);
      }
      else{
        this.props.history.push("/profile");
      }}, 500)

    }

    else{ this.setState({errors: 'Non-matching passwords!'})
    }
  }

  componentWillUnmount() {
    this.props.cleanErrors();
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

    let dashIntro;
    let dashNav;
    let dashBody
    dashNav = <div className="dash-nav">
      <div className="nav-block">
        <Link to="/profile">QUICK LOOK</Link>
        {/* <Link to="/profile">HISTORY</Link> */}
        <Link to="/user/edit">ACCOUNT DETAILS</Link>
      </div>
    </div>


    dashIntro = <div className="dash-intro">
      <h1>Welcome home, {this.props.currentUser.nickname}</h1>
      <h3>What are you thankful for this cycle?</h3>
      <Link className="user-schedule" to="/coffee_schedule"> Sign up for a Coffee Time!</Link>
    </div>

    if (this.state.coffeeEvents) {
      dashBody = <div className="dash-body">
        <h1>Coffee times you're attending</h1>
        <ul>
          {this.state.coffeeEvents}
        </ul>
      </div>
    }

    if (this.state.id){
      dashBody = <div className="edit-form-display">

        <h1>Edit Your Account</h1>
      
      <form className="edit-form" onSubmit={this.submitUser}>


        <div>
          {this.state.errors}
        </div>

        <h2>Personal Information</h2>
        

        <div className="user-id">
          <label>
            NICKNAME
          <input type="text" value={this.state.nickname} onChange={this.update('nickname')} />
          </label>

          <label>
            EMAIL
          <input type="text" value={this.state.email} onChange={this.update('email')} />
          </label>
        </div>

        <div className="fullname">
          <div>
            <label>
              FIRST NAME 
              {/* <p>If different from nickname</p> */}
              <input type="text" value={this.state.first_name} onChange={this.update('first_name')} />
            </label>
          </div>
        
          <div>
            <label>
              LAST NAME
            <input type="text" value={this.state.last_name} onChange={this.update('last_name')} />
            </label>
          </div>
        </div>

        <div className="phone-home">
          <label>
            PHONE NUMBER
             {/* <p>Optional!</p> */}
            <input type="text" value={this.state.phone_number} onChange={this.update('phone_number')} />
          </label>

          <label>
            HOME STAR
          <select className="home-star" onChange={this.update('star_system_id')} defaultValue={this.star}>
              <option disabled>Home Star System</option>
              <option value="1" id="Sol" >Sol</option>
              <option value="2" id="Alpha Centauri">Alpha Centauri</option>
              <option value="3" id="Brodo" >Brodo</option>
            </select>
          </label>
        </div>

        <h2 className="change-pass" >Change Your Password</h2>

        <div className="current-password" ></div>
          <label id="current-pass">
          CURRENT PASSWORD
          <input id="current-password-input" type="password" placeholder="Current password"
            value={this.state.password} onChange={this.update('password')} />
        </label>

        <div className="password-change">
          
          <label>
            NEW PASSWORD
            <input type="password" placeholder="New password"
              value={this.state.new_password} onChange={this.update('new_password')} />
          </label>

          <label>
            CONFIRM NEW PASSWORD
              <input type="password" placeholder="One more time!"
              value={this.state.confirmPassword} onChange={this.update('confirm_password')} />
          </label>
        </div>

        <input id="save" type="submit" value="SAVE CHANGES" />

      </form>
      
      </div>

    }
    


    return(
      <div className="dashboard" >
        {dashNav}
        <div className="dash-clipboard">
          {dashIntro}
          {dashBody}
        </div>

      </div>

    )         


  }

}


export default UserEdit;