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
      questionObj: null,
      answerObj: null,
    };
    this.baseFormsSelectedCheckboxes = new Set();
    this.transFormsSelectedCheckboxes = new Set();
    this.startSession = this.startSession.bind(this);
    this.getNextWord = this.getNextWord.bind(this);
  }

  getNextWord(newSession = false) {
    const [questionObj, answerObj] = getConjuctionData(this.baseFormsSelectedCheckboxes, this.transFormsSelectedCheckboxes);
    const updateObj = {
      questionObj,
      answerObj,
    };

    if (newSession) {
      updateObj.activeSession = newSession;
    }

    this.setState(updateObj);
  }

  startSession() {
    const newSession = true;
    this.getNextWord(newSession);
  }


  render() {
    if (this.state.activeSession) {
      return (
        <div>
          <MainTitle text='conjuction form practice' />
          <PracticeSessionContainer
            questionObj={ this.state.questionObj }
            answerObj={ this.state.answerObj }
            getConjuctionData={ this.state.wordDataObj }
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
          startSessionHandler={ this.startSession }
        />
      </div>
    );
  }
}
