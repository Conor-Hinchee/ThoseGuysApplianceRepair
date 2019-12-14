import React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/PageNotFound/PageNotFound';

const App = () => (
      <BrowserRouter>
        <Helmet title="🧰 Those Guys Appliance Repair 🧺" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
);

export default App;