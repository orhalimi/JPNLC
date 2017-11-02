/* eslint-env browser */
import React from 'react';
import JpnlcTitle from 'components/jpnlcTitle';
import JpnlcMenu from 'components/jpnlcMenu';

import ConjuctionPracticeContent from 'components/conjuctionPractice/conjuctionPracticeContent';


export default class ConjuctionPracticePage extends React.Component {
  render() {
    return (
      <div className='site-borders center'>
        <JpnlcTitle />
        <JpnlcMenu />
        <ConjuctionPracticeContent />
      </div>
    );
  }
}
