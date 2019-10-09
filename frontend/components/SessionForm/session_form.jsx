import React from 'react'
import {Link} from 'react-router-dom';

class SessionForm extends React.Component{

  constructor(props) {
    super(props);

    this.formType = this.props.formType;

    this.state;

    if (this.formType === 'Log In'){

      this.state = {
        email: "",
        password: ""
      };

    }

    else {
      this.state = {
        nickname: "",
        email: "",
        password: ""
      };
    }

    this.submit = this.submit.bind(this);

  }

  submit(e){
    e.preventDefault();
    this.props.processForm(this.state)
  }

  update(field){
    return(e)=>{
      this.setState({[field]: e.target.value})
    }
  }

  render(){

    let formTemplate;

    if (this.formType === 'Log In'){
     formTemplate =  <form className="session" onSubmit={this.submit}>
       <header>Welcome back stranger!</header>
       <p>Good to have you back. Sign in here and schedule your next coffee hangout!</p>

        <input type="text" placeholder="Email Address"
        value={this.state.email} onChange={this.update('email')}/>

        <input type="password" placeholder="Password"
        value={this.state.password} onChange={this.update('password')}/>

        <input className="sess-submit-button" type="submit" value="SIGN IN"/>

        <Link to="/signup" className="altform-prompt"> 
        If you've never signed up before, click here to do so</Link>
      </form>
    }

    else{
      formTemplate = <form className="session" onSubmit={this.submit}>
        <header>Join us for coffee</header>
        <p>Thousands of strangers across the galaxy have sat together for conversations.
           Create an account and you'll be on your way to join the community.</p>

        <input type="text" placeholder="First Name (or nickname)"
         value={this.state.nickname} onChange={this.update('nickname')}/>

        <input type="text" placeholder="Email address"
         value={this.state.email} onChange={this.update('email')}/>    

        <input type="password" placeholder="Password(at least 8 characters you 
        won't forget!)"
        value={this.state.password} onChange={this.update('password')}/>

        <input className="sess-submit-button" type="submit" value="LET'S GET COFFEE"/>

        <Link to="/login" className="altform-prompt"> 
        If you've already done this before, click here to log in</Link>
      </form>

    }


    return(
       <div className="form-clipboard">
        {formTemplate}      
      </div>
    )

  }

}

export default SessionForm;