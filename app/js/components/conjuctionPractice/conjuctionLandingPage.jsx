import React from 'react';
import CheckboxForm from 'components/conjuctionPractice/checkboxForm';
import { getConjBaseForms, getConjtransForms } from 'app/controller';
import WordSection from 'components/conjuctionPractice/conjuctionPracticeWordSection';
import PropTypes from 'prop-types';

export default class ConjuctioLandingPage extends React.Component {
  render() {
    return (
      <div className='pure-g default-text-style'>
        <div className='pure-u-1-8' />
        <CheckboxForm
          checkboxes={ getConjBaseForms() }
          title='From'
          className='pure-form-stacked pure-u-1-4 conjuction-form'
          selectedCheckboxesSet={ this.props.baseForms }
        />
        <WordSection
          className='pure-g pure-u-1-4 center-text default-text-style'
          baseForms={ this.props.baseForms }
          transForms={ this.props.transForms }
          startHandler={ this.props.startHandler }
        />
        <div className='pure-u-1-8' />
        <CheckboxForm
          checkboxes={ getConjtransForms() }
          title='To'
          className='pure-form-stacked pure-u-1-4 conjuction-form'
          selectedCheckboxesSet={ this.props.transForms }
        />
      </div>);
  }
}

ConjuctioLandingPage.propTypes = {
  baseForms: PropTypes.objectOf(Set).isRequired,
  transForms: PropTypes.objectOf(Set).isRequired,
  startHandler: PropTypes.func.isRequired,
};
