import React from "react";
import GreetingContainer from "./Greeting/greeting_container";
import LoginFormContainer from "./SessionForm/login_form_container";
import SignupFormContainer from "./SessionForm/signup_form_container";
import DemoLoginContainer from "./SessionForm/demo_login_container";
import CoffeeScheduleContainer from "./CoffeeSchedule/coffee_schedule_container";
import CoffeeShowContainer from "./CoffeeShow/coffee_show_container";

import {Route, Link } from "react-router-dom";
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import HostFormContainer from "./HostForm/host_form_container";
import UserDashboardContainer from "./UserDashboard/user_dashboard_container";
import UserEditContainer from "./UserDashboard/user_edit_container";
import Home from "./Home/home"

const App = () => (
<div className="App">
  <h1 className="primary">
    <GreetingContainer/>
  </h1>

  <div className="main-clipboard">

  <Route exact path="/" component={Home} />
  <Route path="/coffee_schedule" component={CoffeeScheduleContainer} />
  <Route path="/coffee_schedule/:star" component={CoffeeScheduleContainer}/>
  <Route path="/coffee_show/:id" component={CoffeeShowContainer}/>
 

  <ProtectedRoute path="/user/edit" component={UserEditContainer} />
  <ProtectedRoute path="/profile" component={UserDashboardContainer}/>
  <ProtectedRoute path="/hosting" component={HostFormContainer} />
  <AuthRoute path="/login/" component={LoginFormContainer} />
  <AuthRoute path="/login/demo" component={DemoLoginContainer} />
  <AuthRoute path="/signup" component={SignupFormContainer} />

  </div>
  
  <div class="footer">
    <a class="icons" href="https://github.com/G07Watch">
      <span class="label">Github</span>
    </a>

    <a class="icons" href="https://www.linkedin.com/in/garvin-ming/">
      <span class="label">LinkedIn</span>
    </a>

      <a class="icons" href="https://garvinming.netlify.com/">
      <span class="label">Portfolio</span>
    </a>

    <a class="icons" href="https://www.freepik.com/free-photos-vectors/business">
        Avatars by freepik.com
    </a>
  </div>
  
</div>);

export default App;