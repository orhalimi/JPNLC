import React from 'react';
import PropTypes from 'prop-types';

const QuestionHiragana = (props) => {
  if (props.showHiragana) {
    return <span className='pure-u-1 show-hiragana'>{props.hiragana}</span>;
  }
  return (
    <span className='pure-u-1 show-hiragana'>
      <button
        className={ props.className }
        onClick={ props.onClick }
      >
      show hiragana
      </button>
    </span>);
};


export default QuestionHiragana;

QuestionHiragana.propTypes = {
  className: PropTypes.string.isRequired,
  showHiragana: PropTypes.bool.isRequired,
  hiragana: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
