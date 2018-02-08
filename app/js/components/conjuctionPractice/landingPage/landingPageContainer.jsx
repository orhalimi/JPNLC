import React from 'react';
import CheckboxForm from 'components/checkboxForm';

import StartBtn from 'components/conjuctionPractice/landingPage/StartBtn';
import PropTypes from 'prop-types';

export default class LandingPageContainer extends React.Component {
  render() {
    return (
      <div className="pure-g default-text-style">
        <div className="pure-u-1-8" />
        {/* <CheckboxForm
          checkboxes={getConjBaseForms()}
          title="From"
          className="pure-form-stacked pure-u-1-4 conjuction-form"
          selectedCheckboxesSet={this.props.baseForms}
        /> */}
        <StartBtn
          className="pure-g pure-u-1-4 center-text default-text-style"
          baseForms={this.props.baseForms}
          transForms={this.props.transForms}
          startSessionHandler={this.props.startSessionHandler}
        />
        <div className="pure-u-1-8" />
        {/* <CheckboxForm
          checkboxes={getConjTransForms()}
          title="To"
          className="pure-form-stacked pure-u-1-4 conjuction-form"
          selectedCheckboxesSet={this.props.transForms}
        /> */}
      </div>
    );
  }
}

function getConjBaseForms() {
  return 0;
}

function getConjTransForms() {
  return 0;
}

LandingPageContainer.propTypes = {
  baseForms: PropTypes.objectOf(Set).isRequired,
  transForms: PropTypes.objectOf(Set).isRequired,
  startSessionHandler: PropTypes.func.isRequired,
};
