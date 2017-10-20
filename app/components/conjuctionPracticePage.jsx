/* eslint-env browser */
import React from 'react';
import JpnlcTitle from './jpnlcTitle';
import JpnlcMenu from './jpnlcMenu';
import ConjuctionPracticeTitle from './conjuctionPracticeTitle';
import ConjuctionPracticeContent from './conjuctionPracticeContent';


export default class conjuctionPractic extends React.Component {
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
