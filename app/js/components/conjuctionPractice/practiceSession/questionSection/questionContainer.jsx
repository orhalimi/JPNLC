import React from 'react';
import PropTypes from 'prop-types';
import QuestionHiragana from 'components/conjuctionPractice/practiceSession/questionSection/questionHiragana';


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

    return (
      <div className='pure-g conjuction-asked-section'>
        <div className='pure-u-1'>{`${data.form} form`}
        </div>
        <div className='pure-u-1 pure-g'>
          <span className='pure-u-1 conjuction-asked-word'>{data.word.kanji}</span>
          <QuestionHiragana
            className='pure-u-1 link-style'
            showHiragana={ this.state.showHiragana }
            hiragana={ data.word.hiragana }
            onClick={ this.clickHandler }
          />
        </div>
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  data: PropTypes.object.isRequired,
};
