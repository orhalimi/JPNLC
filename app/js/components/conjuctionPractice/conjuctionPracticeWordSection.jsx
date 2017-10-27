import React from 'react';
import PropTypes from 'prop-types';

export default class WordSection extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.formsValidation();
  }

  formsValidation() {
    const { baseForms, transForms } = this.props;
    if (baseForms.size === 0 || transForms.size === 0) {
      alert('You must selected at least one base from and one transatcion form');
    } else if ((baseForms.size === 1 && transForms.size === 1) &&
                transForms.has(Array.from(baseForms)[0])
    ) {
      alert('You must have at least two different base forms');
    }
  }

  render() {
    return (
      <div className={ this.props.className }>
        <button
          className='button-secondary pure-button conjuction-start-btn'
          onClick={ this.clickHandler }
        >Start
        </button>
      </div>
    );
  }
}

WordSection.propTypes = {
  className: PropTypes.string.isRequired,
  baseForms: PropTypes.objectOf(Set).isRequired,
  transForms: PropTypes.objectOf(Set).isRequired,
};

