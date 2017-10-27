import React from 'react';
import CheckboxForm from 'components/conjuctionPractice/checkboxForm';
import WordSection from 'components/conjuctionPractice/conjuctionPracticeWordSection';
import { getConjBaseForms, getConjtransForms } from 'app/controller';


export default class ConjuctionPracticeContent extends React.Component {
  constructor(props) {
    super(props);
    this.baseFormsSelectedCheckboxes = new Set();
    this.transFormsSelectedCheckboxes = new Set();
  }


  render() {
    return (
      <div className='pure-g default-text-style'>
        <div className='pure-u-1-8' />
        <CheckboxForm
          checkboxes={ getConjBaseForms() }
          title='From'
          className='pure-form-stacked pure-u-1-4 conjuction-form'
          selectedCheckboxesSet={ this.baseFormsSelectedCheckboxes }
        />
        <WordSection
          className='pure-g pure-u-1-4 center-text default-text-style'
          baseForms={ this.baseFormsSelectedCheckboxes }
          transForms={ this.transFormsSelectedCheckboxes }
        />
        <div className='pure-u-1-8' />
        <CheckboxForm
          checkboxes={ getConjtransForms() }
          title='To'
          className='pure-form-stacked pure-u-1-4 conjuction-form'
          selectedCheckboxesSet={ this.transFormsSelectedCheckboxes }
        />
      </div>
    );
  }
}
