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
       <header>{this.props.formType}</header>

       <Link to="/signup"> Sign Up</Link>

        <input type="text" placeholder="Email Address"
        value={this.state.email} onChange={this.update('email')}/>

        <input type="password" placeholder="Password"
        value={this.state.password} onChange={this.update('password')}/>

        <input className="sess-submit-button" type="submit" value="SIGN IN"/>
      </form>
    }

    else{
      formTemplate = <form className="session" onSubmit={this.submit}>
        <header>{this.props.formType}</header>
        <Link to="/login"> Log In</Link>

        <input type="text" placeholder="First Name (or nickname)"
         value={this.state.nickname} onChange={this.update('nickname')}/>

        <input type="text" placeholder="Email address"
         value={this.state.email} onChange={this.update('email')}/>    

        <input type="password" placeholder="Password(at least 8 characters you 
        won't forget!)"
        value={this.state.password} onChange={this.update('password')}/>

        <input className="sess-submit-button" type="submit" value="LET'S GET COFFEE"/>
      </form>

    }


    return(
       <div>
        {formTemplate}      
      </div>
    )

  }

}

export default SessionForm;