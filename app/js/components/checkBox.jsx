/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';


const CheckBox = props => (
  <input
    type="checkbox"
    className="conjuction-form-checkbox"
    id={props.id}
    onChange={props.onChange}
  />
);

export default CheckBox;

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
