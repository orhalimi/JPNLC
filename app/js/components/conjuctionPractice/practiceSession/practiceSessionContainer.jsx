import React from 'react';
import PropTypes from 'prop-types';
import QuestionContainer from 'components/conjuctionPractice/practiceSession/questionSection/QuestionContainer';
import AnswerContainer from 'components/conjuctionPractice/practiceSession/answerSection/AnswerContainer';

const PracticeSessionContainer = () => {
  <div className="center center-text conjuction-form">
    <QuestionContainer data={this.props.questionObj} />
    <AnswerContainer data={this.props.answerObj} onRightAnswer={this.props.onRightAnswer} />
  </div>;
};

export default PracticeSessionContainer;

PracticeSessionContainer.propTypes = {
  questionObj: PropTypes.object.isRequired,
  answerObj: PropTypes.object.isRequired,
  onRightAnswer: PropTypes.func.isRequired,
};
