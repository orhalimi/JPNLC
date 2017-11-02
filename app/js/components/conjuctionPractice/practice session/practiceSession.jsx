import React from 'react';
import QuestionSection from 'components/conjuctionPractice/practice session/questionSection';
import AnswerSection from 'components/conjuctionPractice/practice session/answerSection';

export default class PracticeSession extends React.Component {
  render() {
    return (
      <div className='center center-text conjuction-form'>
        <QuestionSection />
        <AnswerSection />
      </div>
    );
  }
}
