import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const EmailVerificationLandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const { verificationString } = useParams();

  useEffect(() => {
    const loadVerification = async () => {
      try {
        await axios.put('http://localhost:5001/users/verify-email', {
          verificationString,
        });
        setIsSuccess(true);
        setIsLoading(false);
      } catch (error) {
        setIsSuccess(false);
        setIsLoading(false);
      }
    };

    loadVerification();
  }, [verificationString]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <main className="minor_dialog_background_container">
      {isSuccess ? (
        // TO EDIT
        <div className="minor_dialog_container">
          <h2 className="minor_dialog_heading">SUCCESS:</h2>
          <h3 className="minor_dialog_subHeading">Your email is verified.</h3>
          <div className="minor_dialog_button_container">
            <Link to="/Login" className="login_reg_button_wrapper">
              <div className="button_login_register">LOGIN</div>
            </Link>
            <Link to="/" className="login_reg_button_wrapper">
              <div className="button_login_register">HOME</div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="minor_dialog_container">
          <h2 className="minor_dialog_heading">UPS...</h2>
          <h3 className="minor_dialog_subHeading">
            Look like your verification code is not valid.
          </h3>
          <div className="minor_dialog_button_container">
            <Link to="/Login" className="login_reg_button_wrapper">
              <div className="button_login_register">LOGIN</div>
            </Link>
            <Link to="/" className="login_reg_button_wrapper">
              <div className="button_login_register">HOME</div>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};
