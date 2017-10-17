/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from './components/checkBox';

const reactLoader = () => (ReactDOM.render(<CheckBox />, document.getElementById('app')));
export default reactLoader;
