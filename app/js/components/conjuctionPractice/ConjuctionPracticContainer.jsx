import React from 'react';
import MainTitle from 'components/conjuctionPractice/MainTitle';
import LandingPageContainer from 'components/conjuctionPractice/landingPage/LandingPageContainer';
import PracticeSessionContainer from 'components/conjuctionPractice/practiceSession/PracticeSessionContainer';
import { getConjuctionData } from 'app/controller';

export default class ConjuctionPracticContainer extends React.Component {
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
    const [questionObj, answerObj] =
    getConjuctionData(this.baseFormsSelectedCheckboxes, this.transFormsSelectedCheckboxes);
    const stateUpdateObj = {
      questionObj,
      answerObj,
    };

    if (newSession) {
      stateUpdateObj.activeSession = newSession;
    }

    this.setState(stateUpdateObj);
  }

  startSession() {
    const newSession = true;
    this.getNextWord(newSession);
  }


  render() {
    if (this.state.activeSession) {
      return (
        <div>
          <MainTitle text="conjuction form practice" />
          <PracticeSessionContainer
            questionObj={this.state.questionObj}
            answerObj={this.state.answerObj}
            getConjuctionData={this.state.wordDataObj}
            onRightAnswer={this.getNextWord}
          />
        </div>
      );
    }
    return (
      <div>
        <MainTitle text="conjuction form practice" />
        <LandingPageContainer
          baseForms={this.baseFormsSelectedCheckboxes}
          transForms={this.transFormsSelectedCheckboxes}
          startSessionHandler={this.startSession}
        />
      </div>
    );
  }
}