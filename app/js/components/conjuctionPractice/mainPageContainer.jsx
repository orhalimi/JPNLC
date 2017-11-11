/* eslint-env browser */
import React from 'react';
import JpnlcTitle from 'components/jpnlcTitle';
import JpnlcMenu from 'components/jpnlcMenu';

import PageContentContainer from 'components/conjuctionPractice/pageContentContainer';


export default class MainPageContainer extends React.Component {
  render() {
    return (
      <div className='site-borders center'>
        <JpnlcTitle />
        <JpnlcMenu />
        <PageContentContainer />
      </div>
    );
  }
}
