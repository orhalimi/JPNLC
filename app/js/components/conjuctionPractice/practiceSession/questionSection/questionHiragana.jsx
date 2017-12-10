import React from 'react';
import PropTypes from 'prop-types';

const QuestionHiragana = (props) => {
  let hiragana;
  if (!props.showHint) {
    hiragana = '';
  } else if (props.showHiragana) {
    hiragana = props.hiragana;
  } else {
    hiragana =
    (<button
      className={props.className}
      onClick={props.onClick}
    >
      show hiragana
     </button>
    );
  }
  return (
    <span className="pure-u-1 show-hiragana">{hiragana} </span>);
};


export default QuestionHiragana;

QuestionHiragana.propTypes = {
  className: PropTypes.string.isRequired,
  showHiragana: PropTypes.bool.isRequired,
  hiragana: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  showHint: PropTypes.bool.isRequired,
};
