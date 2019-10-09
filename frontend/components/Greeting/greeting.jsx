import React from "react";
import {Link} from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    let currentUser = this.props.currentUser;
    let greeting = <div/>;

    if (currentUser != null) {
      greeting = (
      <div className="greeting" key="greeting">
        <p>Welcome {currentUser.nickname}</p>
        <button onClick={this.logout}>Logout!</button>
      </div>);
    } else {
      greeting = (
      <div className="greeting" key="greeting">
        <Link to="/signup">Sign Up!</Link>
        or
        <Link to="/login">Log In!</Link>
      </div>
      );
    }

    return greeting;
  }
}

export default Greeting;