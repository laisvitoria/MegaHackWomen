import React from 'react'
import { Switch, Route } from "react-router-dom";

import TelaHome from './Pages/Home'

const Routes = () => (
    <Switch>
      <Route path="/" component={TelaHome} />
    </Switch>
);

export default Routes;
