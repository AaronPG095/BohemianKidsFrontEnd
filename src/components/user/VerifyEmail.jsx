import React from 'react';
import { Link } from 'react-router-dom';
import { RiMailCloseLine } from 'react-icons/ri';

function VerifyEmail() {
  return (
    <div className="minor_dialog_container">
      <h1 className="minor_dialog_heading">VERIFY</h1>
      <RiMailCloseLine className="minor_dialog_icon" />
      <p className="minor_dialog_msg">
        Please verify your email address, we have sent you a verification link.
      </p>

      <div className="minor_dialog_button_container">
        <Link to="/Login" className="login_reg_button_wrapper">
          <div className="button_login_register">LOGIN</div>
        </Link>
        <Link to="/" className="login_reg_button_wrapper">
          <div className="button_login_register">HOME</div>
        </Link>
      </div>
    </div>
  );
}

export default VerifyEmail;
