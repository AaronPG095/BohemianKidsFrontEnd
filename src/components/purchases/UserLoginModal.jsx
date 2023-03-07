import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { goToTopOfPage } from '../../util/goToTopPge';
import { FiUserMinus } from 'react-icons/fi';

const UserLoginModal = ({ setLoginPromptIsOpen, windowPositionY }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return (
    <>
      <div
        className="darkBG middleOfPage"
        onClick={(event) => {
          event.stopPropagation();
          if (event.currentTarget === event.target) {
            setLoginPromptIsOpen(false);
          }
        }}
        style={{
          top: windowPositionY,
        }}
      >
        <div className="centered">
          <div className="modal_container">
            <div className="modal_closeBtn_container">
              <Link
                className="button_link"
                onClick={() => setLoginPromptIsOpen(false)}
              >
                <button className="modal_closeBtn">
                  <GrClose className="modal_closeBtn_icon" />
                </button>
              </Link>
            </div>
            <div className="modal_content">
              <FiUserMinus style={{ fontSize: '3rem', margin: '1rem' }} />
              <h1>ARE YOU LOGGED IN?</h1>
              <p
                style={{
                  margin: '1rem',
                  fontSize: '0.8rem',
                  textAlign: 'center',
                }}
              >
                You must be logged in to make purchases in the online store...
              </p>
              <Link
                aria-label="Link to Login Page"
                to="/Login"
                className="button_link"
                onClick={goToTopOfPage}
              >
                <div
                  style={{ margin: '1rem', color: 'black' }}
                  className="button_medium_colorFour"
                >
                  LOGIN
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLoginModal;
