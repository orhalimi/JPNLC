import React from 'react';
import CheckBox from './checkBox';
import CheckboxForm from './checkboxForm';

export default class ConjuctionPracticeContent extends React.Component {
  render() {
    return (
      <div className='pure-g default-text-style'>
        <div className='pure-u-1-8' />
        <CheckboxForm />
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
    );
  }
}
