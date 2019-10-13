import React from "react";
import GreetingContainer from "./Greeting/greeting_container";
import LoginFormContainer from "./SessionForm/login_form_container";
import SignupFormContainer from "./SessionForm/signup_form_container";
import DemoLoginContainer from "./SessionForm/demo_login_container";
import {Route, Link } from "react-router-dom";
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import HostFormContainer from "./HostForm/host_form_container";

const App = () => (
<div className="App">
  <h1 className="primary">
    <Link className="Home-link" to="/">Coffee With Aliens</Link>
    <GreetingContainer/>
  </h1>

  {/* Test Only */}

    <Route path="/coffee_schedule" component={CoffeeSchedule} />

  {/* Test Only */}

  <ProtectedRoute path="/hosting" component={HostFormContainer} />
  <AuthRoute path="/login/" component={LoginFormContainer} />
  <AuthRoute path="/login/demo" component={DemoLoginContainer} />
  <AuthRoute path="/signup" component={SignupFormContainer} />
</div>);

export default App;