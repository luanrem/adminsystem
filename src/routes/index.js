import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main}/>
      </Switch>
    </BrowserRouter>
  );
}