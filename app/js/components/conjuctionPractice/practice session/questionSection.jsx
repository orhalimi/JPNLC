import React from 'react';

export default class QuestionSection extends React.Component {
  render() {
    return (
      <div className='pure-g conjuction-asked-section'>
        <div className='pure-u-1'>masu form
        </div>
        <div className='pure-u-1 pure-g'>
          <span className='pure-u-1 conjuction-asked-word'>食べる</span>
          <button className='pure-u-1 link-style'>show hiragana
          </button>
        </div>
      </div>
    );
  }
}
