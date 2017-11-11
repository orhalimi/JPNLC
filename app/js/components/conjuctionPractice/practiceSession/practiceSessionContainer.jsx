import React from 'react';
import PropTypes from 'prop-types';
import QuestionSection from 'components/conjuctionPractice/practiceSession/questionSection';
import AnswerSection from 'components/conjuctionPractice/practiceSession/answerSection';

export default class PracticeSessionContainer extends React.Component {
  render() {
    return (
      //
      <div className='center center-text conjuction-form'>
        <QuestionSection qForm={ this.props.qForm } />
        <AnswerSection aForm={ this.props.aForm } />
      </div>
    );
  }
}

PracticeSessionContainer.propTypes = {
  qForm: PropTypes.string.isRequired,
  aForm: PropTypes.string.isRequired,
};
