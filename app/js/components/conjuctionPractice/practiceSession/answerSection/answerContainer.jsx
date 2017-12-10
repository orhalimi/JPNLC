import React from 'react';
import PropTypes from 'prop-types';
import ConjuctionFormText from 'conjuctionPractice/practiceSession/ConjuctionFormText';
import FormContainer from 'conjuctionPractice/practiceSession/answerSection/FormContainer';

import answerState from 'conjuctionPractice/practiceSession/answerSection/answerEnums';

export default class AnswerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerState: answerState.emptyState,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this._answerTries = 0;
  }

  changeHandler(event) {
    this.userAnswer = event.target.value;
  }

  submitHandler(event) {
    event.preventDefault();
    if (
      this.userAnswer === this.props.data.word.hiragana ||
      this.userAnswer === this.props.data.word.kanji
    ) {
      this.setState({ answerState: answerState.rightAnswer });

      this.props.onRightAnswer();
      this._answerTries = 0;
    } else {
      this._answerTries++;
      this.setState({ answerState: answerState.wrongAnswer });
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className="pure-g pure-u-1-2 center answer-section">
        <ConjuctionFormText form={data.form} />
        <FormContainer
          data={data}
          onChange={this.changeHandler}
          answerState={this.state.answerState}
          onClick={this.submitHandler}
          answerTries={this._answerTries}
          correctHiragana={this.props.data.word.hiragana}
          correctKanji={this.props.data.word.kanji}
        />
      </div>
    );
  }
}

AnswerContainer.propTypes = {
  data: PropTypes.object.isRequired,
  onRightAnswer: PropTypes.func.isRequired,
};
