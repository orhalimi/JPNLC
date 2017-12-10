/* eslint react/prefer-stateless-function: 0 */ // --> OFF
// disable eslint stateless functin since switch doesn't support ref
import React from 'react';
import PropTypes from 'prop-types';
import QuestionContainer from 'components/conjuctionPractice/practiceSession/questionSection/QuestionContainer';
import AnswerContainer from 'components/conjuctionPractice/practiceSession/answerSection/AnswerContainer';

export default class PracticeSessionContainer extends React.Component {
  render() {
    return (
      <div className="center center-text conjuction-form">
        <QuestionContainer data={this.props.questionObj} />
        <AnswerContainer data={this.props.answerObj} onRightAnswer={this.props.onRightAnswer} />
      </div>
    );
  }
}

PracticeSessionContainer.propTypes = {
  questionObj: PropTypes.object.isRequired,
  answerObj: PropTypes.object.isRequired,
  onRightAnswer: PropTypes.func.isRequired,
};
