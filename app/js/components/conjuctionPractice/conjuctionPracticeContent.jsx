import React from 'react';
import ConjuctionPracticeTitle from 'components/conjuctionPractice/conjuctionPracticeTitle';
import ConjuctionLandingPage from 'components/conjuctionPractice/conjuctionLandingPage';
import PracticeSession from 'components/conjuctionPractice/practice session/practiceSession';

export default class ConjuctionPracticeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSession: false,
    };
    this.baseFormsSelectedCheckboxes = new Set();
    this.transFormsSelectedCheckboxes = new Set();
    this.startSession = this.startSession.bind(this);
  }

  startSession() {
    this.setState({ activeSession: true });
  }

  render() {
    if (this.state.activeSession) {
      return (
        <div>
          <ConjuctionPracticeTitle text='conjuction form practice' />
          <PracticeSession />
        </div>
      );
    }
    return (
      <div>
        <ConjuctionPracticeTitle text='conjuction form practice' />
        <ConjuctionLandingPage
          baseForms={ this.baseFormsSelectedCheckboxes }
          transForms={ this.transFormsSelectedCheckboxes }
          startHandler={ this.startSession }
        />
      </div>
    );
  }
}
