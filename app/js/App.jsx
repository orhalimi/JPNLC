/*
Author: Or Halimi
Copyright (c) 2017 Or Halimi. All rights reserved.
*/

import css from 'css/main.css';
import buttons from 'css/buttons.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ConjuctionPracticContainer from 'components/conjuctionPractice/ConjuctionPracticContainer';
import AboutContainer from 'components/about/AboutContainer';
import JpnlcTitle from 'components/jpnlcTitle';
import JpnlcMenu from 'components/jpnlcMenu';

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <div className='site-borders center'>
        <JpnlcTitle />
        <JpnlcMenu />
        <Route exact path='/' component={ ConjuctionPracticContainer } />
        <Route exact path='/about' component={ AboutContainer } />
      </div>
    </div>
  </BrowserRouter>
);


render(<App />, document.getElementById('app'));

