import React from 'react';
import PropTypes from 'prop-types';

const UserDetailsInput = props => (
  <div className={props.className}>
    <div className="pure-u-1-2 pure-g">
      <span className="pure-u-10-24">username:</span>
      <input className="pure-u-1-2" name="username" type="text" onChange={props.onChange} />
    </div>
    <div className="pure-u-1-2 pure-g">
      <span className="pure-u-3-8">pasword:</span>
      <input className="pure-u-1-2" name="password" type="password" onChange={props.onChange} />
    </div>
  </div>
);

UserDetailsInput.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default UserDetailsInput;
