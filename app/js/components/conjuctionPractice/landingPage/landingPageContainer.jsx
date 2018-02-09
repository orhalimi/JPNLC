import React from 'react';
import CheckboxForm from 'components/checkboxForm';
import { getForms, options } from 'app/tools/apiCalls';
import StartBtn from 'components/conjuctionPractice/landingPage/StartBtn';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conjBaseForms: [],
      conjTransForm: [],
    };
  }

  componentDidMount() {
    const promises = [getForms(options.formsType.baseForms), getForms(options.formsType.transForm)];
    axios.all(promises).then((results) => {
      this.setState({
        conjBaseForms: results[0].data,
        conjTransForm: results[1].data,
      });
    });
  }


  render() {
    return (
      <div className="pure-g default-text-style">
        <div className="pure-u-1-8" />
        <CheckboxForm
          checkboxes={this.state.conjBaseForms}
          title="From"
          className="pure-form-stacked pure-u-1-4 conjuction-form"
          selectedCheckboxesSet={this.props.baseForms}
        />
        <StartBtn
          className="pure-g pure-u-1-4 center-text default-text-style"
          baseForms={this.props.baseForms}
          transForms={this.props.transForms}
          startSessionHandler={this.props.startSessionHandler}
        />
        <div className="pure-u-1-8" />
        <CheckboxForm
          checkboxes={this.state.conjTransForm}
          title="To"
          className="pure-form-stacked pure-u-1-4 conjuction-form"
          selectedCheckboxesSet={this.props.transForms}
        />
      </div>
    );
  }
}


LandingPageContainer.propTypes = {
  baseForms: PropTypes.objectOf(Set).isRequired,
  transForms: PropTypes.objectOf(Set).isRequired,
  startSessionHandler: PropTypes.func.isRequired,
};
