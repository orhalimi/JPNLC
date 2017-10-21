/* eslint-env browser */
import React from 'react';
import JpnlcTitle from 'components/jpnlcTitle';
import JpnlcMenu from 'components/jpnlcMenu';
import ConjuctionPracticeTitle from 'components/conjuctionPracticeTitle';
import ConjuctionPracticeContent from 'components/conjuctionPracticeContent';


export default class ConjuctionPracticePage extends React.Component {
  render() {
    return (
      <div className='site-borders center'>
        <JpnlcTitle />
        <JpnlcMenu />
        <ConjuctionPracticeTitle text='conjuction form practice' />
        <ConjuctionPracticeContent />
      </div>
    );
  }
}
