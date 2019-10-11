import React from 'react'
import {Link} from 'react-router-dom';

class SessionForm extends React.Component{

  constructor(props) {
    super(props);

    this.formType = this.props.formType;

    this.state;
    

    // FORM SELECTION LOGIC
    if (this.formType === "Demo Log In"){

      this.state = {
        email: "mystery@gmail.com",
        password: "12345678"
      };
      console.log(this.state)
    }

    else if(this.formType === "Log In"){
       this.state = {
        email: "",
        password: ""
      };
    }

    else {
      this.state = {
        nickname: "",
        email: "",
        password: "",
        star_system_id: "",
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

  componentDidMount(){
   if (this.formType === "Demo Log In"){
    this.props.processForm(this.state)
   }
  }
  

  componentWillUnmount(){
    this.props.cleanErrors();
  }

  
  render(){

    let formTemplate;
    let errors;

    //ERROR RENDER LOGIC

    if (typeof this.props.errors === "array"){
      errors = <ul className="sess-errors">
        <h2>Error:</h2>
       {this.props.errors.map(
        error =>(
        <p key={error} >{error}</p>)
        )}
      </ul>
      // errors = <p className="sess-errors">Error: {this.props.errors}</p>
      // window.alert(this.props.errors);
    }
    else{ errors = <p></p> }

    // FORM TEMPLATE RENDER LOGIC

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

    else if (this.formType === 'Sign Up'){
      
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

        <select onChange={this.update('star_system_id')} defaultValue="Home Star System">
          <option disabled>Home Star System</option>
          <option value="1" id="Sol" >Sol</option>
          <option value="2" id="Alpha Centauri">Alpha Centauri</option>
          <option value="3" id="Brodo" >Brodo</option>
        </select>

        <input className="sess-submit-button" type="submit" value="LET'S GET COFFEE"/>

        <Link to="/login" className="altform-prompt"> 
        If you've already done this before, click here to log in</Link>
      </form>

    }

    else {
      formTemplate = 'It\'s a mystery!'
    }

    
    return(
      <div className="form-clipboard">
        <ul>
        {errors}
        </ul>
        {formTemplate}      
      </div>
    )
  }


}

export default SessionForm;