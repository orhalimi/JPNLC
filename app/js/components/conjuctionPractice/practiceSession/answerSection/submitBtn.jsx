import React from 'react';
import PropTypes from 'prop-types';

const SubmitBtn = props => (
  (
    <div className='pure-u-1'>
      <button className='pure-button' onClick={ props.onClick }>submit</button>
    </div>)
);

export default SubmitBtn;

SubmitBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
