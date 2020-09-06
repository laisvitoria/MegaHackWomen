import React from 'react'
import { Switch, Route } from "react-router-dom";

import TelaHome from './Pages/Home'
import TelaLogin from './Pages/Login'
import TelaExemple from './Pages/Exemple'

const Routes = () => (
    <Switch>
      <Route exact path="/" component={TelaHome} />
      <Route path="/login" component={TelaLogin} />
      <Route path="/localization" component={TelaExemple} />
    </Switch>
);

export default Routes;
