import React from 'react';
import PropTypes from 'prop-types';

export default class FormErrorMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowCorrectAnswer = this.handleShowCorrectAnswer.bind(this);
    this.state = { isShowingCorrectAnswer: false };
  }

  handleShowCorrectAnswer(event) {
    event.preventDefault();
    this.setState({ isShowingCorrectAnswer: true });
  }

  render() {
    if (this.state.isShowingCorrectAnswer) {
      this.state.isShowingCorrectAnswer = false;

      return (
        <div className="answer-validation-text">
          Hiragana: {this.props.correctAnswerHiragana} <br />
          Kanji: {this.props.correctAnswerKanji}
        </div>
      );
    }
    const showAnswerBtn = (
      <button className="link-style" onClick={this.handleShowCorrectAnswer}>
        Show correct answer
      </button>
    );

    return (
      <div className={this.props.className}>
        {this.props.text}
        <br />
        {this.props.answerTries >= 3 && showAnswerBtn}
      </div>
    );
  }
}

FormErrorMessage.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  correctAnswerHiragana: PropTypes.string,
  correctAnswerKanji: PropTypes.string,
  answerTries: PropTypes.number,
};

FormErrorMessage.defaultProps = {
  correctAnswerHiragana: '',
  correctAnswerKanji: '',
  answerTries: 0,
};
