import React from 'react';
import PropTypes from 'prop-types';

const QuestionHiragana = props => <button className={ props.className }>show hiragana</button>;

export default QuestionHiragana;

QuestionHiragana.propTypes = {
  className: PropTypes.string.isRequired,
};
