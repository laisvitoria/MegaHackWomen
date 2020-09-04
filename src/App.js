import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from './stylesGlobal.js';
import Routes from './routes.js'

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes />
    </BrowserRouter>
  );
}

export default App;
