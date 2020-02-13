import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './styles.css';

function Header() {
  return (
    <div className="header">
      <img
        src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3.png"
        height="50"
      />
      <div className="user-info">
        <strong>Diego Araujo</strong>

        <AccountCircleIcon />
      </div>
    </div>
  );
}
export default Header;
