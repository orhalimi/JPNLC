import React from 'react';
import MainTitle from 'components/conjuctionPractice/MainTitle';
import LandingPageContainer from 'components/conjuctionPractice/landingPage/LandingPageContainer';
import PracticeSessionContainer from 'components/conjuctionPractice/practiceSession/PracticeSessionContainer';
import { setActiveSession } from 'app/redux/actionCreators';
import { connect } from 'react-redux';
import { postUserSelectedForms } from 'app/tools/apiCalls';
import PropTypes from 'prop-types';

class ConjuctionPracticContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionObj: null,
      answerObj: null,
    };
    this.baseFormsSelectedCheckboxes = new Set();
    this.transFormsSelectedCheckboxes = new Set();
    this.startSession = this.startSession.bind(this);
    this.getNextWord = this.getNextWord.bind(this);
  }

  getNextWord(newSession = false) {
    postUserSelectedForms(Array.from(this.baseFormsSelectedCheckboxes), Array.from(this.transFormsSelectedCheckboxes))
      .then((res) => {
        const [questionObj, answerObj] = res.data;
        const stateUpdateObj = {
          questionObj,
          answerObj,
        };
        this.setState(stateUpdateObj);
        if (newSession) {
          this.props.handleActiveSessionChange(true);
        }
      });
  }

  startSession() {
    const newSession = true;
    this.getNextWord(newSession);
  }

  render() {
    if (this.props.activeSession) {
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

ConjuctionPracticContainer.propTypes = {
  activeSession: PropTypes.bool.isRequired,
  handleActiveSessionChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ activeSession: state.activeSession });
const mapDispatchToProps = dispach => ({
  handleActiveSessionChange(isActiveSession) {
    dispach(setActiveSession(isActiveSession));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ConjuctionPracticContainer);
