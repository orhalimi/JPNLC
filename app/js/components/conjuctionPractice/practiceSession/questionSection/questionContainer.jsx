import React from 'react';
import PropTypes from 'prop-types';
import QuestionHiragana from 'conjuctionPractice/practiceSession/questionSection/questionHiragana';
import QuestionKanji from 'conjuctionPractice/practiceSession/questionSection/questionKanji';
import ShowconjuctionForm from 'conjuctionPractice/practiceSession/showconjuctionForm';

export default class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHiragana: false,
      showHint: true,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ showHiragana: true });
  }

  render() {
    const { data } = this.props;
    if (data.word.kanji === data.word.hiragana) {
      this.setState({ showHint: false });
    }
    return (
      <div className='pure-g conjuction-asked-section'>
        <ShowconjuctionForm form={ data.form } />
        <div className='pure-u-1 pure-g'>
          <QuestionKanji kanji={ data.word.kanji } />
          <QuestionHiragana
            className='pure-u-1 link-style'
            showHiragana={ this.state.showHiragana }
            hiragana={ data.word.hiragana }
            onClick={ this.clickHandler }
            showHint={ this.state.showHint }
          />
        </div>
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  data: PropTypes.object.isRequired,
};
