import React from 'react';
import PropTypes from 'prop-types';
import ConjuctionFormText from 'conjuctionPractice/practiceSession/conjuctionFormText';
import FormContainer from 'conjuctionPractice/practiceSession/answerSection/formContainer';

import answerState from 'conjuctionPractice/practiceSession/answerSection/answerEnums';

export default class AnswerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerState: answerState.emptyState,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.userAnswer = event.target.value;
  }

  submitHandler(event) {
    event.preventDefault();
    if (this.userAnswer === this.props.data.word.hiragana ||
        this.userAnswer === this.props.data.word.kanji) {
      this.setState({ answerState: answerState.rightAnswer });

      this.props.onRightAnswer();
    } else {
      this.setState({ answerState: answerState.wrongAnswer });
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className='pure-g pure-u-1-2 center answer-section'>
        <ConjuctionFormText form={ data.form } />
        <FormContainer data={ data } onChange={ this.changeHandler } answerState={ this.state.answerState } onClick={ this.submitHandler } />
      </div>
    );
  }
}

AnswerContainer.propTypes = {
  data: PropTypes.object.isRequired,
  onRightAnswer: PropTypes.func.isRequired,
};
