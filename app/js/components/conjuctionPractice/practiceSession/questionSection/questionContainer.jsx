import React from 'react';
import PracticeSessionContainer from 'components/conjuctionPractice/practiceSession/questionSection/questionHiragana';


export default class QuestionContainer extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className='pure-g conjuction-asked-section'>
        <div className='pure-u-1'>{`${data.form} form`}
        </div>
        <div className='pure-u-1 pure-g'>
          <span className='pure-u-1 conjuction-asked-word'>{data.word.kanji}</span>
          <PracticeSessionContainer className='pure-u-1 link-style' />
        </div>
      </div>
    );
  }
}
