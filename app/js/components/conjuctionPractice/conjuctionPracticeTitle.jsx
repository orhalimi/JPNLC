import React from 'react';
import PropTypes from 'prop-types';

const ConjuctionPracticeTitle = props => (
  <h2 className='center-text jpnlc-secendry-title'>
    {props.text}
  </h2>);

ConjuctionPracticeTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ConjuctionPracticeTitle;

