import React from 'react';
import ConjuctionPracticeTitle from 'components/conjuctionPractice/conjuctionPracticeTitle';
import ConjuctionLandingPage from 'components/conjuctionPractice/conjuctionLandingPage';
import PracticeSession from 'components/conjuctionPractice/practice session/practiceSession';
import { getConjuctionData } from 'app/controller';

export default class ConjuctionPracticeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSession: false,
      qForm: null,
      aForm: null,
      wordDataObj: null,
    };
    this.baseFormsSelectedCheckboxes = new Set();
    this.transFormsSelectedCheckboxes = new Set();
    this.startSession = this.startSession.bind(this);
    this.getactiveSessionData = this.getactiveSessionData.bind(this);
  }

  getactiveSessionData() {
    return getConjuctionData(this.baseFormsSelectedCheckboxes, this.transFormsSelectedCheckboxes);
  }

  startSession() {
    console.log(this.getactiveSessionData());

    this.setState({
      activeSession: true,
      qForm: 't',
      aForm: 't',
      wordDataObj: 't',
    });
  }


  render() {
    if (this.state.activeSession) {
      return (
        <div>
          <ConjuctionPracticeTitle text='conjuction form practice' />
          <PracticeSession
            qForm={ this.state.qForm }
            aForm={ this.state.aForm }
            wordDataObj={ this.state.wordDataObj }
          />
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
