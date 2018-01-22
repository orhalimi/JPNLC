import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import css from '../css/main.css';
import buttons from '../css/buttons.css';


const renderApp = () => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('app'));
};

renderApp();
