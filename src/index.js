import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enemy from './pages/Enemy';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/enemy/:slug"  component={Enemy} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


