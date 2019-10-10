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

    if (currentUser != null) {
      greeting = (
      <div className="greeting-user" key="greeting">
        <p className="welcome">Welcome {currentUser.nickname}</p>
        <button className="Logout" onClick={this.logout}>SIGN OUT</button>
      </div>);
    } else {
      greeting = (
      <div className="greeting" key="greeting">
        <Link to="/login/demo" className="demo-link">DEMO</Link>
        <Link to="/login" className="signin-link">SIGN IN</Link>
        <Link to="/signup" className={ this.state.hover ? "signup-link-hover" : "signup-link-norm" } 
        onMouseEnter={this.hoverOn}
        onMouseOut={this.hoverOff}
        >SIGN UP</Link>
      </div>
      );
    }

    return greeting;
  }
}

export default Greeting;