import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Helmet title="🧰 Those Guys Appliance Repair 🧺" />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
