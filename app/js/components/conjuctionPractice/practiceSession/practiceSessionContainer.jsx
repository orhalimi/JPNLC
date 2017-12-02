import React from 'react';
import PropTypes from 'prop-types';
import QuestionContainer from 'components/conjuctionPractice/practiceSession/questionSection/QuestionContainer';
import AnswerContainer from 'components/conjuctionPractice/practiceSession/answerSection/AnswerContainer';

export default class PracticeSessionContainer extends React.Component {
  render() {
    console.log(this.props.questionObj);
    console.log(this.props.answerObj);
    return (
      //
      <div className='center center-text conjuction-form'>
        <QuestionContainer data={ this.props.questionObj } />
        <AnswerContainer data={ this.props.answerObj } onRightAnswer={ this.props.onRightAnswer } />
      </div>
    );
  }
}

PracticeSessionContainer.propTypes = {
  questionObj: PropTypes.object.isRequired,
  answerObj: PropTypes.object.isRequired,
  onRightAnswer: PropTypes.func.isRequired,
};
