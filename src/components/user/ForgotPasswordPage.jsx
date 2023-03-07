import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context/authContext';
import axios from 'axios';

function ForgotPasswordPage() {
  const auth = useAuth();
  const [email, setEmail] = useState('');

  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const redirectPath = location.state?.path || '/';
  const navigate = useNavigate();

  function handleChange(event) {
    const { value } = event.target;
    setEmail((prevValue) => value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      axios
        .post(
          `https://bohemian-kids-backend-server.onrender.com/users/forgot-password/`,
          {
            email,
          }
        )
        .then((res) => {
          setSuccess(true);
          window.localStorage.setItem('isAuth', 'false');
          auth.contextValue.setUser({
            isAuth: false,
            msg: '',
          });
          setTimeout(() => {
            navigate(redirectPath, { replace: true });
          }, 3000);
        })
        .catch((error) => {
          window.localStorage.setItem('isAuth', 'false');
          auth.contextValue.setUser({
            isAuth: false,
            msg: error.response.data.msg,
          });
        });
    } catch (error) {
      console.log(error, 'error w forgot password page');
      window.localStorage.setItem('isAuth', 'false');
      auth.contextValue.setUser({
        isAuth: false,
        msg: error.response.data.msg,
      });
    }
  }

  return (
    <>
      <main className="minor_dialog_background_container">
        {success ? (
          <div className="minor_dialog_container">
            <h3 className="minor_dialog_heading">Success</h3>
            <p>We have sent you an email with a reset link.</p>
            <p>
              Click to go to <Link to="/">home page</Link> or wait to be
              redirected.
            </p>
          </div>
        ) : (
          <div className="minor_dialog_container">
            <form className="minor_dialog_form" onSubmit={handleSubmit}>
              <h3 className="minor_dialog_subHeading">ENTER YOUR EMAIL:</h3>
              <div className="minor_dialog_form_item">
                <input
                  type="text"
                  placeholder="EMAIL"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                />
                <button className="minor_dialog_submit_button" type="submit">
                  CONFIRM
                </button>
              </div>
              <div className="minor_dialog_button_container">
                <Link
                  className="login_reg_button_wrapper"
                  aria-label="Link to Home Page"
                  to="/"
                >
                  <div className="button_login_register">HOME</div>{' '}
                </Link>
              </div>
            </form>
          </div>
        )}
      </main>
    </>
  );
}

export default ForgotPasswordPage;
