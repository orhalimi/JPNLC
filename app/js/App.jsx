/*
Author: Or Halimi
Copyright (c) 2017 Or Halimi. All rights reserved.
*/
/* eslint no-unused-vars: 0 */ // --> OFF // eliminate for css import

import css from 'css/main.css';
import buttons from 'css/buttons.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ConjuctionPracticContainer from 'components/conjuctionPractice/ConjuctionPracticContainer';
import AboutContainer from 'components/about/AboutContainer';
import JpnlcTitle from 'components/JpnlcTitle';
import JpnlcMenu from 'components/JpnlcMenu';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <div className="site-borders center">
        <JpnlcTitle />
        <JpnlcMenu />
        <Switch>
          <Route exact path="/about" component={AboutContainer} />
          <Route component={ConjuctionPracticContainer} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
