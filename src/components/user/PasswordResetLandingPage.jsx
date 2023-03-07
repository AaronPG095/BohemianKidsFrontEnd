import { useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../auth-context/authContext';

function PasswordResetLandingPage() {
  const auth = useAuth();
  const [isSuccess, setIsSuccess] = useState(false);
  const [passwords, setNewPasswords] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const location = useLocation();
  const redirectPath = location.state?.path || '/';
  const navigate = useNavigate();

  const { passwordResetCode } = useParams();

  function handleChange(event) {
    const { name, value } = event.target;
    setNewPasswords((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      axios
        .patch(
          `https://bohemian-kids-backend-server.onrender.com/users/reset-password/`,
          {
            newPassword: passwords.newPassword,
            confirmPassword: passwords.confirmPassword,
            passwordResetCode,
          }
        )
        .then((res) => {
          setIsSuccess(true);
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
      console.log(error, 'error w reset password page');
      window.localStorage.setItem('isAuth', 'false');
      auth.contextValue.setUser({
        isAuth: false,
        msg: error.response.data.msg,
      });
    }
  }
  return isSuccess ? (
    <div
      className="bg"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h2>Success</h2>
      <p>Your password is changed.</p>
      <p>
        Click here to <Link to="/users/login">login</Link> or wait to be
        redirected.
      </p>
    </div>
  ) : (
    <div
      className="bg"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <form onSubmit={handleSubmit}>
        <h3>Enter new password: </h3>
        {auth.contextValue.user.msg && <div>{auth.contextValue.user.msg}</div>}
        <label htmlFor="newPassword">
          New Password{' '}
          <span className="login-span">
            (At least 6 characters and includes a number and a special
            character)
          </span>
        </label>
        <input
          type="password"
          placeholder="newPassword"
          name="newPassword"
          id="newPassword"
          value={passwords.newPassword}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          placeholder="confirmPassword"
          name="confirmPassword"
          id="confirmPassword"
          value={passwords.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Confirm</button>
        <div>
          <Link to="/">Go to home page</Link>
        </div>
      </form>
    </div>
  );
}

export default PasswordResetLandingPage;
