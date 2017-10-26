import React from 'react';
import PropTypes from 'prop-types';

export default class WordSection extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log(this.props.baseFormsSelectedCheckboxes)
  }

  render() {
    return (
      <div className={ this.props.className }>
        <button className='button-secondary pure-button conjuction-start-btn' onClick={ this.clickHandler }>Start</button>
      </div>
    );
  }
}

WordSection.propTypes = {
  className: PropTypes.string.isRequired,
};

