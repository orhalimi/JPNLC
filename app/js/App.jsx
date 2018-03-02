/*
Author: Or Halimi
Copyright (c) 2017 Or Halimi. All rights reserved.
*/
/* eslint no-unused-vars: 0 */ // --> OFF // eliminate for css import

import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ConjuctionPracticContainer from 'components//conjuctionPractice/ConjuctionPracticContainer';
import AboutContainer from 'components/about/AboutContainer';
import JpnlcTitle from 'components/header/JpnlcTitle';
import JpnlcMenu from 'components/header/JpnlcMenu';
import UserLoginContainer from 'components/header/userLoginSection/UserLoginContainer';
import FourOFour from 'components/FourOFour';
import store from './redux/store';


const App = () => (
  <Provider store={store}>
    <div className="app">
      <div className="site-borders center">
        <header>
          <UserLoginContainer />
          <JpnlcTitle />
          <JpnlcMenu />
        </header>
        <section>
          <Switch>
            <Route exact path="/about" component={AboutContainer} />
            <Route exact path="/404" component={FourOFour} />
            <Route component={ConjuctionPracticContainer} />
          </Switch>
        </section>
      </div>
    </div>
  </Provider>
);

export default App;
