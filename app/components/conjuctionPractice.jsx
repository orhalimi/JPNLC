/* eslint-env browser */
import React from 'react';
import CheckBox from './checkBox';


export default class conjuctionPractic extends React.Component {
  render() {
    return (
      <div className='site-borders center'>
        <h1 className='center-text jpnlc-title'>
            Japanese learning center
        </h1>
        <div className='pure-menu jpnlc-menu pure-menu-horizontal default-text-style'>
          <ul className='pure-menu-list'>
            <li className='pure-menu-item'>
              <a href='#' className='pure-menu-link'>Japanese dictionary</a>
            </li>
            <li className='pure-menu-item'>
              <a href='#' className='pure-menu-link'>Form conjuction practice</a>
            </li>
            <li className='pure-menu-item'>
              <a href='#' className='pure-menu-link'>About</a>
            </li>
          </ul>
        </div>
        <h2 className='center-text jpnlc-secendry-title'>
                conjuction form practice
        </h2>
        <div className='pure-g default-text-style'>
          <div className='pure-u-1-8' />
          <form className='pure-form-stacked pure-u-1-8 conjuction-form'>
            <h3>From</h3>
            <label className='pure-checkbox'>
              <CheckBox />x form
            </label>
            <label className='pure-checkbox'>
              <CheckBox />xyx form
            </label>
          </form>
          <div className='pure-g pure-u-1-2 center-text default-text-style'>
            <button className='button-secondary pure-button conjuction-start-btn'>Start</button>
          </div>
          <div className='pure-form-stacked pure-u-1-4 conjuction-form'>
            <h3>To</h3>
            <label className='pure-checkbox'>
              <CheckBox />x form
            </label>
            <label className='pure-checkbox'>
              <CheckBox />xyx form
            </label>
          </div>
        </div>
      </div>

    );
  }
}
