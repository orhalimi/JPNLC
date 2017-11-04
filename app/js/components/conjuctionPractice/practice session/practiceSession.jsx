import React from 'react';
import PropTypes from 'prop-types';
import QuestionSection from 'components/conjuctionPractice/practice session/questionSection';
import AnswerSection from 'components/conjuctionPractice/practice session/answerSection';

export default class PracticeSession extends React.Component {
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

PracticeSession.propTypes = {
  qForm: PropTypes.string.isRequired,
  aForm: PropTypes.string.isRequired,
};
