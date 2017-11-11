/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import MainPageContainer from 'components/conjuctionPractice/mainPageContainer';


const reactLoader = () => (ReactDOM.render(<MainPageContainer />, document.getElementById('app')));

export default reactLoader;
