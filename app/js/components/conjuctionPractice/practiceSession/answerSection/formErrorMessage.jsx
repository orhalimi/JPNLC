import React from 'react';
import PropTypes from 'prop-types';


const FormErrorMessage = props => <div className={props.className}>{props.text}</div>;

export default FormErrorMessage;

FormErrorMessage.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
