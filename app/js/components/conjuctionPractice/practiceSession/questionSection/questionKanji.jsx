import React from 'react';
import PropTypes from 'prop-types';

const QuestionKanji = props =>
  <span className='pure-u-1 conjuction-asked-word'>{props.kanji}</span>;

export default QuestionKanji;


QuestionKanji.propTypes = {
  kanji: PropTypes.string.isRequired,
};
