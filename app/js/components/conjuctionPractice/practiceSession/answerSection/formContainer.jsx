import React from 'react';
import PropTypes from 'prop-types';
import FormErrorMessage from 'conjuctionPractice/practiceSession/answerSection/formErrorMessage';

export default class FormContainer extends React.Component {
  render() {
    return (
      <form className='pure-g pure-u-3-4 '>
        <label className='pure-u-1' htmlFor='answered-word'>
          <input
            className='pure-u-1 underline-style center-input-text '
            id='answered-word'
            placeholder='Type your answer here'
            onChange={ this.props.onChange }
          />
        </label>
        <FormErrorMessage className='wrong-answer -hidden' />
      </form>
    );
  }
}
FormContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
};
