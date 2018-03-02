import React from 'react';
import { Link } from 'react-router-dom';
import { setActiveSession } from 'app/redux/actionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const JpnlcMenu = props => (
  <div className="pure-menu jpnlc-menu pure-menu-horizontal default-text-style">
    <ul className="pure-menu-list">
      <li className="pure-menu-item">
        <Link to="/" className="pure-menu-link" onClick={props.stopActiveSession}>
          Form conjuction practice
        </Link>
      </li>
      {/* <li className='pure-menu-item'>
        <a href='#' className='pure-menu-link'>Japanese dictionary</a>
      </li> */}
      <li className="pure-menu-item">
        <Link to="/about" className="pure-menu-link">
          About
        </Link>
      </li>
    </ul>
  </div>
);
const mapStateToProps = () => ({});
const mapDispatchToProps = dispach => ({
  stopActiveSession() {
    dispach(setActiveSession(false));
  },
});

JpnlcMenu.propTypes = {
  stopActiveSession: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(JpnlcMenu);
