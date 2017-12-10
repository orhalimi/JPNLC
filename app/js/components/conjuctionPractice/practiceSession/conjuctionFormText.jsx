import React from 'react';
import PropTypes from 'prop-types';

const ConjuctionFormText = props => <div className="pure-u-1">{`${props.form} form`}  </div>;

export default ConjuctionFormText;


ConjuctionFormText.propTypes = {
  form: PropTypes.string.isRequired,
};
