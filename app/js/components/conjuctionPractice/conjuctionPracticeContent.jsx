import React from 'react';
import ConjuctionPracticeTitle from 'components/conjuctionPractice/conjuctionPracticeTitle';
import ConjuctionLandingPage from 'components/conjuctionPractice/conjuctionLandingPage';
import PracticeSession from 'components/conjuctionPractice/practice session/practiceSession';

export default class ConjuctionPracticeContent extends React.Component {
  render() {
    return (
      <div>
        <ConjuctionPracticeTitle text='conjuction form practice' />
        {/* <ConjuctionLandingPage /> */}
        <PracticeSession />
      </div>
    );
  }
}
