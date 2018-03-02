import React from 'react';
import PropTypes from 'prop-types';

const noUnderlineLinkBtn = props =>
  (
    <button className={`link-style -no-link-underline ${props.className}`} onClick={props.onClick}>{props.btnText}
    </button>
  );

noUnderlineLinkBtn.propTypes = {
  btnText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default noUnderlineLinkBtn;
