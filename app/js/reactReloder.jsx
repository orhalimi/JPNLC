/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import ConjuctionPracticePage from 'components/conjuctionPractice/conjuctionPracticePage';


const reactLoader = () => (ReactDOM.render(<ConjuctionPracticePage />, document.getElementById('app')));
export default reactLoader;
