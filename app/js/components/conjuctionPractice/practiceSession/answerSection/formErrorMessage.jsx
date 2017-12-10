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
        <div>
          <div>Hiragana: {this.props.correctAnswerHiragana}</div>
          <div>Kanji: {this.props.correctAnswerKanji}</div>
        </div>
      );
    }
    const showAnswerBtn = (
      <button onClick={this.handleShowCorrectAnswer}> Show correct answer </button>
    );

    return (
      <div className={this.props.className}>
        {this.props.text}
        {this.props.answerTries >= 3 && showAnswerBtn}
      </div>
    );
  }
}

FormErrorMessage.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  correctAnswerHiragana: PropTypes.string.isRequired,
  correctAnswerKanji: PropTypes.string.isRequired,
};
