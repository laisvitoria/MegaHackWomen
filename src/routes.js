import React from 'react'
import { Switch, Route } from "react-router-dom";

import Home from './Pages/Home'
import Login from './Pages/Login'
import Initial from './Pages/Initial'
import SearchDonnas from './Pages/SearchDonnas'

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/initial" component={Initial} />
      <Route path="/donnas" component={SearchDonnas} />
    </Switch>
);

export default Routes;
