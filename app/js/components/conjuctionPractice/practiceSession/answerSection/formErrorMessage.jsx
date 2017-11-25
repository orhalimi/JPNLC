import React from 'react';
import PropTypes from 'prop-types';


const FormErrorMessage = props => <div className={ props.className }>wrong answer</div>;

export default FormErrorMessage;

FormErrorMessage.propTypes = {
  className: PropTypes.string.isRequired,
};
