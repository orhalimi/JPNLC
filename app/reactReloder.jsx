/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import ConjuctionPractice from './components/conjuctionPractice';


const reactLoader = () => (ReactDOM.render(<ConjuctionPractice />, document.getElementById('app')));
export default reactLoader;
