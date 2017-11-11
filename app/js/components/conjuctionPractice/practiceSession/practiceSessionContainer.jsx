import React from 'react';
import PropTypes from 'prop-types';
import QuestionContainer from 'components/conjuctionPractice/practiceSession/questionSection/questionContainer';
import AnswerContainer from 'components/conjuctionPractice/practiceSession/answerSection/answerContainer';

export default class PracticeSessionContainer extends React.Component {
  render() {
    return (
      //
      <div className='center center-text conjuction-form'>
        <QuestionContainer data={ this.props.questionObj } />
        <AnswerContainer data={ this.props.answerObj } />
      </div>
    );
  }
}

PracticeSessionContainer.propTypes = {
  questionObj: PropTypes.object.isRequired,
  answerObj: PropTypes.object.isRequired,
};
