import React from 'react'
import { Switch, Route } from "react-router-dom";

import TelaExemple from './Pages/Exemple'

const Routes = () => (
    <Switch>
      <Route path="/" component={TelaExemple} />
    </Switch>
);

export default Routes;
