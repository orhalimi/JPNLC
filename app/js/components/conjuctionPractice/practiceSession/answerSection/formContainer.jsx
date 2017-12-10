import React from 'react';
import PropTypes from 'prop-types';
import FormErrorMessage from 'conjuctionPractice/practiceSession/answerSection/FormErrorMessage';
import answerState from 'conjuctionPractice/practiceSession/answerSection/answerEnums';
import SubmitBtn from 'conjuctionPractice/practiceSession/answerSection/SubmitBtn';

export default class FormContainer extends React.Component {
  createAnswerValidationObj() {
    if (this.props.answerState === answerState.wrongAnswer) {
      return (
        <FormErrorMessage
          className="answer-validation-text wrong-answer"
          text="wrong answer"
          answerState={this.props.answerState}
          answerTries={this.props.answerTries}
          correctAnswerHiragana={this.props.correctHiragana}
          correctAnswerKanji={this.props.correctKanji}
        />
      );
    } else if (this.props.answerState === answerState.rightAnswer) {
      return <FormErrorMessage className="answer-validation-text right-answer" text="good job" />;
    }
    return <FormErrorMessage className="answer-validation-text -hidden" text="" />;
  }

  render() {
    const answerValidationMassage = this.createAnswerValidationObj();

    return (
      <form className="pure-g pure-u-3-4 ">
        <label className="pure-u-1" htmlFor="answered-word">
          <input
            className="pure-u-1 underline-style center-input-text "
            id="answered-word"
            placeholder="Type your answer here"
            onChange={this.props.onChange}
          />
        </label>
        {answerValidationMassage}
        <SubmitBtn onClick={this.props.onClick} />
      </form>
    );
  }
}
FormContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  answerState: PropTypes.string.isRequired,
};
