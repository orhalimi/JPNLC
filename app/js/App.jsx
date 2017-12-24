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
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <div className="site-borders center">
          <header>
            <JpnlcTitle />
            <JpnlcMenu />
          </header>
          <section>
            <Switch>
              <Route exact path="/about" component={AboutContainer} />
              <Route component={ConjuctionPracticContainer} />
            </Switch>
          </section>
        </div>
      </div>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
