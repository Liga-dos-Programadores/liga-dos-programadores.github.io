import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Comunity from './pages/Comunity';
import Codiga from './pages/Codiga';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/comunity" exact component={Comunity} />
        <Route path="/codiga" exact component={Codiga} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
