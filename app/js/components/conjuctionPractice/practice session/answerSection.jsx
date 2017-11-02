import React from 'react';

export default class AnswerSection extends React.Component {
  render() {
    return (
      <div className='pure-g pure-u-1-2 center'>
        <form className='pure-g pure-u-3-4 '>
          <label className='pure-u-1 answer-section' htmlFor='answered-word'>te form:
            <input
              className='pure-u-1 underline-style center-input-text '
              id='answered-word'
              placeholder='Type your answer here'
            />
          </label>
          <div className='wrong-answer'>wrong answer</div>
        </form>
        <div className='pure-u-1'>
          <button className='pure-button'>submit</button>
        </div>
      </div>
    );
  }
}
