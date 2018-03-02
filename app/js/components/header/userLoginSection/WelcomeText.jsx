import React from 'react';
import PropTypes from 'prop-types';

const WelcomeText = props => (
  <div className={props.className}>Welcome <b>{props.username}</b></div>
);

WelcomeText.propTypes = {
  username: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default WelcomeText;
