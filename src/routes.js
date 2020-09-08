import React from 'react'
import { Switch, Route } from "react-router-dom";

import Home from './Pages/Home'
import Login from './Pages/Login'
import Initial from './Pages/Initial'
import SearchDonnas from './Pages/SearchDonnas'
import Mentoring from './Pages/Mentoring'
import Events from './Pages/Events'

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/initial" component={Initial} />
      <Route path="/mentoring" component={Mentoring} />
      <Route path="/events" component={Events} />
      <Route path="/donnas" component={SearchDonnas} />
    </Switch>
);

export default Routes;
