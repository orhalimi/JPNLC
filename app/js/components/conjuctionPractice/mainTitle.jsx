import React from 'react';
import PropTypes from 'prop-types';

const MainTitle = props => (
  <h2 className="center-text jpnlc-secendry-title">
    {props.text}
  </h2>);

MainTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MainTitle;

