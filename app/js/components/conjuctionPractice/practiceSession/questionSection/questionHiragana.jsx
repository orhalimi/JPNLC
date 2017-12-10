import React from 'react';
import PropTypes from 'prop-types';

const QuestionHiragana = (props) => {
  let hiraganaPlaceHolder;
  const { hiragana } = props;
  if (!props.showHint) {
    hiraganaPlaceHolder = '';
  } else if (props.showHiragana) {
    hiraganaPlaceHolder = hiragana;
  } else {
    hiraganaPlaceHolder = (
      <button className={props.className} onClick={props.onClick}>
        show hiragana
      </button>
    );
  }
  return <span className="pure-u-1 show-hiraganaPlaceHolder">{hiraganaPlaceHolder} </span>;
};

export default QuestionHiragana;

QuestionHiragana.propTypes = {
  className: PropTypes.string.isRequired,
  showHiragana: PropTypes.bool.isRequired,
  hiragana: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  showHint: PropTypes.bool.isRequired,
};
