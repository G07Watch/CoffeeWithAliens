import React from "react";
import GreetingContainer from "./Greeting/greeting_container";
import LoginFormContainer from "./SessionForm/login_form_container";
import SignupFormContainer from "./SessionForm/signup_form_container";
import DemoLoginContainer from "./SessionForm/demo_login_container";
import {Route, Link } from "react-router-dom";
import {AuthRoute} from '../util/route_util';

const App = () => (
<div className="App">
  <h1 className="primary">
    <Link className="Home-link" to="/">Coffee With Aliens</Link>
    <GreetingContainer/>
  </h1>

  
  
  <AuthRoute path="/login/" component={LoginFormContainer} />
  <AuthRoute path="/login/demo" component={DemoLoginContainer} />
  <AuthRoute path="/signup" component={SignupFormContainer} />
</div>);

export default App;