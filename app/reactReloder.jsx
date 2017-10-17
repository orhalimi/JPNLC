/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import H1 from './components/selectBox';

const reactLoader = () => (ReactDOM.render(<H1 />, document.getElementById('app')));
export default reactLoader;
