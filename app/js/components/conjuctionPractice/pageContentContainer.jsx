import React from 'react';
import MainTitle from 'components/conjuctionPractice/mainTitle';
import LandingPageContainer from 'components/conjuctionPractice/landingPage/landingPageContainer';
import PracticeSessionContainer from 'components/conjuctionPractice/practiceSession/practiceSessionContainer';
import { getConjuctionData } from 'app/controller';

export default class PageContentController extends React.Component {
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
          <MainTitle text='conjuction form practice' />
          <PracticeSessionContainer
            qForm={ this.state.qForm }
            aForm={ this.state.aForm }
            wordDataObj={ this.state.wordDataObj }
          />
        </div>
      );
    }
    return (
      <div>
        <MainTitle text='conjuction form practice' />
        <LandingPageContainer
          baseForms={ this.baseFormsSelectedCheckboxes }
          transForms={ this.transFormsSelectedCheckboxes }
          startHandler={ this.startSession }
        />
      </div>
    );
  }
}
