import React from "react";
import {Link} from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      hover: false
    }
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn(){
    this.setState({hover:true})
  }

  hoverOff(){
    this.setState({hover: false})
  }

  logout() {
    this.props.logout();
  }

  render() {
    let currentUser = this.props.currentUser;
    let greeting = <div/>;
    let welcome = <p/>;
    let hosting = 'user';

    if (this.props.hosting){
     hosting = 'host';
    }

    if (currentUser != null) {
      greeting = (
      <div className="greeting-user" key="greeting">
        {/* <Link className="Home-link" to="/">Coffee With Aliens</Link> */}
        <Link to="/coffee_schedule" className="coffee-schedule-link">COFFEE SCHEDULE</Link>
        <Link to="/hosting" className={`hosting-link-${hosting}`}>HOSTING</Link>
        <button className="signout" onClick={this.logout}
        className={ this.state.hover ? "signout-link-hover" : "signout-link-norm" } 
        onMouseEnter={this.hoverOn}
        onMouseOut={this.hoverOff}
        
        >SIGN OUT</button>


        
      </div>);

      welcome = <p className="welcome">Welcome {currentUser.nickname}</p>;
    } else {
      greeting = (
      <div className="greeting" key="greeting">
        {/* <Link className="Home-link" to="/">Coffee With Aliens</Link> */}
        <Link to="/coffee_schedule" className="coffee-schedule-link">COFFEE SCHEDULE</Link>
        <Link to="/login/demo" className="demo-link">DEMO</Link>
        <Link to="/login" className="signin-link">SIGN IN</Link>
        <Link to="/signup" className={ this.state.hover ? "signup-link-hover" : "signup-link-norm" } 
        onMouseEnter={this.hoverOn}
        onMouseOut={this.hoverOff}
        >SIGN UP</Link>

      

      </div>
      );
    }

    return(
      <div className="nav-bar">
        <Link className="Home-link" to="/">Coffee With Aliens</Link>
        {greeting}
        {welcome}
      </div>
    )
  }
}

export default Greeting;