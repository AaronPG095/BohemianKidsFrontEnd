import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { setLocalStorage } from '../../util/setLocalStorage';
import { useAuth } from '../auth-context/authContext';
import { useRef } from 'react';
import { goToTopOfPage } from '../../util/goToTopPge';
import { useContext } from 'react';
import { cartProductContext } from '../context/CartProductContext';
import { getUserCurrentCart } from '../../util/getUserCurrentCart';
function Login() {
  const auth = useAuth();

  const { cartProductState, dispatchCartProductState } =
    useContext(cartProductContext);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [loginMessage, setLoginMessage] = useState(null);

  const [isLogin, setIsLogin] = useState(false);
  const inputPassword = useRef();
  const iconRef = useRef();
  const location = useLocation();
  const redirectPath = location.state?.path || '/';

  const navigate = useNavigate();

  function handleChange(event) {
    setLoginMessage('');

    const { name, value } = event.target;
    setUser((prevValue) => ({ ...prevValue, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLogin(true);

    // auth.contextValue.login(user);
    axios
      // This address will change depends on PORT
      // you are using or after uploading
      .post('http://localhost:5001/users/login', {
        email: user.email,
        password: user.password,
      })
      .then((user) => {
        setLocalStorage(user);
        const userId = localStorage.getItem('user_id');
        getUserCurrentCart(userId, dispatchCartProductState);
        setUser({
          email: '',
          password: '',
        });
        window.localStorage.setItem('isAuth', 'true');
        auth.contextValue.setUser({
          isAuth: true,
          msg: '',
        });
        setIsLogin(false);
        navigate(redirectPath, { replace: true });
        goToTopOfPage();
      })
      .catch((error) => {
        setLoginMessage(error.response.data.msg);

        setIsLogin(false);

        window.localStorage.setItem('isAuth', 'false');
        auth.contextValue.setUser({
          isAuth: false,
          msg: error.response.data.msg,
        });
      });
  }

  function handleTogglePassword() {
    const type =
      inputPassword.current.getAttribute('type') === 'password'
        ? 'text'
        : 'password';
    inputPassword.current.setAttribute('type', type);
    iconRef.current.classList.toggle('fa-eye-slash');
  }

  return (
    <main className="login_reg_page">
      <article className="login_reg_outer_container">
        <section className="login_reg_inner_container">
          <h1 className="login_reg_heading">LOGIN</h1>
          {loginMessage && (
            <span className="login_error-message">{loginMessage}</span>
          )}
          <form onSubmit={handleSubmit} className="login_reg_form" action="">
            <label className="login_reg_form_item" htmlFor="">
              EMAIL
              <input
                value={user.email}
                onChange={handleChange}
                className="login_reg_form_inputField"
                type="email"
                name="email"
              />
            </label>
            <label
              className="login_reg_form_item"
              htmlFor=""
              style={{ position: 'relative', zIndex: '0' }}
            >
              PASSWORD
              <input
                value={user.password}
                onChange={handleChange}
                className="login_reg_form_inputField"
                type="password"
                name="password"
                id="password"
                ref={inputPassword}
              />
              <i
                ref={iconRef}
                className="far fa-eye"
                id="togglePassword"
                onClick={handleTogglePassword}
                style={{
                  position: 'absolute',
                  textAlign: 'right',
                  top: '30px',
                  right: '10px',
                  cursor: 'pointer',
                }}
              ></i>
            </label>
            {isLogin ? (
              <div className="login_reg_button_container" htmlFor="submit">
                <button
                  className="login_reg_button_wrapper"
                  type="submit"
                  value={'LOGIN'}
                >
                  <div className="button_login_register">
                    <i
                      className="fas fa-spinner fa-spin"
                      style={{ marginRight: '5px', marginBottom: '3px' }}
                    ></i>
                    LOGIN
                  </div>
                </button>
              </div>
            ) : (
              <div className="login_reg_button_container" htmlFor="submit">
                <button
                  className="login_reg_button_wrapper"
                  type="submit"
                  value={'LOGIN'}
                >
                  <div
                    className="button_login_register"
                    type="submit"
                    value={'LOGIN'}
                  >
                    LOGIN
                  </div>
                </button>
              </div>
            )}
          </form>
          <div className="login_end_container">
            <Link
              to="/forgot-password"
              className="notRegistered_link"
              aria-label="register button / link"
            >
              FORGOT PASSWORD?
            </Link>

            <Link
              to={'/Registration'}
              className="notRegistered_link"
              aria-label="register button / link"
            >
              NOT REGISTERED?
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}

export default Login;
