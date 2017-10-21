import React from 'react';
import CheckboxForm from 'components/checkboxForm';
import { getConjBaseForm, getConjtransForm } from '../controller';

export default class ConjuctionPracticeContent extends React.Component {
  render() {
    return (
      <div className='pure-g default-text-style'>
        <div className='pure-u-1-8' />
        <CheckboxForm checkboxes={ getConjBaseForm() } title='From' className='pure-form-stacked pure-u-1-4 conjuction-form' />
        <div className='pure-g pure-u-1-4 center-text default-text-style'>
          <button className='button-secondary pure-button conjuction-start-btn'>Start</button>
        </div>
        <div className='pure-u-1-8' />
        <CheckboxForm checkboxes={ getConjtransForm() } title='To' className='pure-form-stacked pure-u-1-4 conjuction-form' />
      </div>
    );
  }
}
