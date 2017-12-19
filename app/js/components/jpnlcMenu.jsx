import React from 'react';
import { Link } from 'react-router-dom';

const JpnlcMenu = () => (
  <div className="pure-menu jpnlc-menu pure-menu-horizontal default-text-style">
    <ul className="pure-menu-list">
      <li className="pure-menu-item">
        <Link to={{ pathname: '/', state: 'newSession' }} className="pure-menu-link">
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

export default JpnlcMenu;
