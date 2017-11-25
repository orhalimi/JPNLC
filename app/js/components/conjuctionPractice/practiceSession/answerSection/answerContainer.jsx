import React from 'react';
import PropTypes from 'prop-types';
import ShowconjuctionForm from 'conjuctionPractice/practiceSession/showconjuctionForm';
import FormContainer from 'conjuctionPractice/practiceSession/answerSection/formContainer';
import SubmitBtn from 'conjuctionPractice/practiceSession/answerSection/submitBtn';

export default class AnswerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.userAnswer = event.target.value;
  }

  submitHandler() {
    if (this.userAnswer === this.props.data.word.hiragana ||
        this.userAnswer === this.props.data.word.kanji) {
      console.log('user was right');
    } else {
      console.log('user was wrong');
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className='pure-g pure-u-1-2 center answer-section'>
        <ShowconjuctionForm form={ data.form } />
        <FormContainer data={ data } onChange={ this.changeHandler } />
        <SubmitBtn onClick={ this.submitHandler } />
      </div>
    );
  }
}

AnswerContainer.propTypes = {
  data: PropTypes.object.isRequired,
};
