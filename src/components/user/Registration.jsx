import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import VerifyEmail from './VerifyEmail';

function Register() {
  const [user, setUser] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: '',
    title: '',
  });

  const inputPassword = useRef();
  const iconRef = useRef();

  const inputConfirmPassword = useRef();
  const iconConfirmRef = useRef();

  const [registerMessage, setRegisterMessage] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(event) {
    setRegisterMessage(null);
    const { name, value } = event.target;
    setUser((prevValue) => ({ ...prevValue, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsRegister(true);
    axios
      .post(
        'https://bohemian-kids-backend-server.onrender.com/users/register',
        {
          fName: user.fName,
          lName: user.lName,
          email: user.email,
          password: user.password,
          confirmPassword: user.confirmPassword,
          title: user.title,
        }
      )
      .then((response) => {
        setIsRegister(false);
        setIsSuccess(true);
      })
      .catch((error) => {
        setIsRegister(false);
        if (
          error.response.data.error &&
          error.response.data.error.message === 'Email is already in use.'
        ) {
          setRegisterMessage('Email is already in use');
        } else {
          setRegisterMessage(error.response.data.errors[0].msg);
        }
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

  function handleToggleConfirmPassword() {
    const typeConfirm =
      inputConfirmPassword.current.getAttribute('type') === 'password'
        ? 'text'
        : 'password';
    inputConfirmPassword.current.setAttribute('type', typeConfirm);
    iconConfirmRef.current.classList.toggle('fa-eye-slash');
  }

  return (
    <>
      <main className="login_reg_page">
        {isSuccess ? (
          <VerifyEmail />
        ) : (
          <article className="login_reg_outer_container">
            <section className="login_reg_inner_container">
              <>
                <h1 className="login_reg_heading">REGISTER</h1>{' '}
                {registerMessage && (
                  <span className="login_error-message">{registerMessage}</span>
                )}
                <form
                  onSubmit={handleSubmit}
                  className="login_reg_form"
                  action=""
                >
                  <label className="login_reg_form_item" htmlFor="title">
                    TITLE:
                    <select
                      className="login_reg_form_inputField"
                      type="text"
                      placeholder="Your title"
                      name="title"
                      id="title"
                      value={user.title}
                      onChange={handleChange}
                    >
                      <option default>select title</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Miss">Miss</option>
                    </select>{' '}
                  </label>
                  <label className="login_reg_form_item" htmlFor="">
                    FIRST NAME
                    <input
                      onChange={handleChange}
                      value={user.fName}
                      className="login_reg_form_inputField"
                      type="text"
                      name="fName"
                    />
                  </label>
                  <label className="login_reg_form_item" htmlFor="">
                    LAST NAME
                    <input
                      onChange={handleChange}
                      value={user.lName}
                      className="login_reg_form_inputField"
                      type="text"
                      name="lName"
                    />
                  </label>
                  <label className="login_reg_form_item" htmlFor="">
                    EMAIL
                    <input
                      onChange={handleChange}
                      value={user.email}
                      className="login_reg_form_inputField"
                      type="email"
                      name="email"
                    />
                  </label>

                  <label
                    style={{ position: 'relative', zIndex: '0' }}
                    className="login_reg_form_item"
                    htmlFor=""
                  >
                    PASSWORD
                    <span className="login-span">
                      (At least 6 characters and includes a number and a special
                      character)
                    </span>
                    <input
                      ref={inputPassword}
                      onChange={handleChange}
                      value={user.password}
                      className="login_reg_form_inputField"
                      type="password"
                      name="password"
                    />
                    <i
                      ref={iconRef}
                      className="far fa-eye"
                      id="togglePassword"
                      onClick={handleTogglePassword}
                      style={{
                        position: 'absolute',
                        textAlign: 'left',
                        top: '46px',
                        right: '-425px',
                        cursor: 'pointer',
                      }}
                    ></i>
                  </label>

                  <label
                    style={{ position: 'relative', zIndex: '0' }}
                    className="login_reg_form_item"
                    htmlFor=""
                  >
                    CONFIRM PASSWORD
                    <input
                      ref={inputConfirmPassword}
                      onChange={handleChange}
                      className="login_reg_form_inputField"
                      value={user.confirmPassword}
                      type="password"
                      name="confirmPassword"
                    />
                    <i
                      ref={iconConfirmRef}
                      className="far fa-eye"
                      id="togglePassword"
                      onClick={handleToggleConfirmPassword}
                      style={{
                        position: 'absolute',
                        textAlign: 'left',
                        top: '30px',
                        right: '15px',
                        cursor: 'pointer',
                      }}
                    ></i>
                  </label>
                  {isRegister ? (
                    <div
                      className="login_reg_button_container"
                      htmlFor="submit"
                    >
                      <button
                        className="login_reg_button_wrapper"
                        type="submit"
                        value={'REGISTER'}
                      >
                        <div className="button_login_register">
                          <i
                            class="fas fa-spinner fa-spin"
                            style={{ marginRight: '5px', marginBottom: '3px' }}
                          ></i>
                          REGISTER
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div
                      className="login_reg_button_container"
                      htmlFor="submit"
                    >
                      <button
                        className="login_reg_button_wrapper"
                        type="submit"
                        value={'REGISTER'}
                      >
                        <div className="button_login_register">REGISTER</div>
                      </button>
                    </div>
                  )}
                </form>
                <div className="reg_end_container">
                  <div className="reg_otherAccounts_container">
                    <Link className="login_with_facebook_button">
                      <FaFacebook className="login_with_facebook_button_icon" />
                      Login with Facebook
                    </Link>
                    <Link className="login_with_google_button">
                      <FcGoogle className="login_with_google_button_icon" />
                      SIGN IN WITH GOOGLE
                    </Link>
                  </div>
                </div>
              </>
            </section>
          </article>
        )}
      </main>
    </>
  );
}

export default Register;
