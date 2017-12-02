import React from 'react';
import PropTypes from 'prop-types';
import QuestionHiragana from 'conjuctionPractice/practiceSession/questionSection/QuestionHiragana';
import QuestionKanji from 'conjuctionPractice/practiceSession/questionSection/QuestionKanji';
import ConjuctionFormText from 'conjuctionPractice/practiceSession/ConjuctionFormText';

export default class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHiragana: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ showHiragana: true });
  }

  render() {
    const { data } = this.props;
    this.showHint = data.word.kanji !== data.word.hiragana;
    return (
      <div className='pure-g conjuction-asked-section'>
        <ConjuctionFormText form={ data.form } />
        <div className='pure-u-1 pure-g'>
          <QuestionKanji kanji={ data.word.kanji } />
          <QuestionHiragana
            className='pure-u-1 link-style'
            showHiragana={ this.state.showHiragana }
            hiragana={ data.word.hiragana }
            onClick={ this.clickHandler }
            showHint={ this.showHint }
          />
        </div>
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  data: PropTypes.object.isRequired,
};
