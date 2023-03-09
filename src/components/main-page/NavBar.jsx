import React, { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import { useAuth } from '../auth-context/authContext';
import { cartProductContext } from '../context/CartProductContext';
import { goToTopOfPage } from '../../util/goToTopPge';
import { useEffect } from 'react';
import axios from 'axios';
export function NavBar({ setOpen, open }) {
  const { cartProductState, dispatchCartProductState } =
    useContext(cartProductContext);

  const auth = useAuth();

  const location = useLocation();
  const path = location.pathname;

  // // User Dropdown Menu Logic
  // const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };

  const userPermission = JSON.parse(localStorage.getItem('role'));

  return (
    <header className="navbar">
      <nav className="navbar_content">
        <ul className="navbar_content_container">
          {/* Home Button */}
          {path !== '/' ? (
            <NavLink
              className="navbar_navlink"
              aria-label="Home page link"
              to="/"
            >
              <div className="navbar_button">HOME</div>
            </NavLink>
          ) : null}

          {/* News Button */}

          {path === '/News' ? null : (
            <NavLink
              onClick={goToTopOfPage}
              className="navbar_navlink"
              aria-label="News page link"
              to="News"
            >
              <div className="navbar_button">NEWS</div>
            </NavLink>
          )}
          {/* Menu Button */}
          {path === '/Menu' ? null : (
            <NavLink
              onClick={goToTopOfPage}
              aria-label="Menu page link"
              className="navbar_navlink"
              to="Menu"
            >
              <div className="navbar_button">MENU</div>
            </NavLink>
          )}
          {/* Shop Button */}
          {path === '/Shop' ? null : (
            <NavLink
              onClick={goToTopOfPage}
              aria-label="Shop page link"
              className="navbar_navlink"
              to="/Shop"
            >
              <div className="navbar_button">SHOP</div>
            </NavLink>
          )}

          {/* User Dropdown */}

          {path === '/Login' ||
          path === '/Registration' ||
          path === '/UserInfoPage' ? null : auth.contextValue.user.isAuth ? (
            //*  Logged In User *//
            <div className="user_dropdown">
              <div className="button_link" onClick={handleOpen}>
                <div className="navbar_button_user_loggedIn">
                  <span className="navbar_button_user_content">USER </span>
                  {open ? (
                    <MdOutlineArrowDropUp className="user_dropdown_arrow_icon" />
                  ) : (
                    <MdOutlineArrowDropDown className="user_dropdown_arrow_icon" />
                  )}
                </div>
              </div>
              {open ? (
                <div className="user_dropdown_content">
                  <NavLink
                    className="user_dropdown_navlink"
                    to="/user"
                    onClick={goToTopOfPage}
                    aria-label="User Info Page Link"
                  >
                    <div className="user_dropdown_list_loggedIn">
                      <div>USER INFO</div>
                    </div>
                  </NavLink>
                  <NavLink
                    className="user_dropdown_navlink"
                    to="/"
                    onClick={() => auth.contextValue.logout(cartProductState)}
                    aria-label="Log Out Page Link"
                  >
                    <div className="user_dropdown_list_loggedIn">LOG OUT</div>
                  </NavLink>
                  {userPermission === 'user' ? null : (
                    <NavLink
                      className="user_dropdown_navlink"
                      to="/AdminPage"
                      onClick={goToTopOfPage}
                      aria-label="Admin Page Link"
                    >
                      <div className="user_dropdown_list_loggedIn">
                        <div>ADMIN</div>
                      </div>
                    </NavLink>
                  )}
                </div>
              ) : null}
            </div>
          ) : (
            //*  Logged Out User *//
            <div className="user_dropdown">
              <div className="button_link" onClick={handleOpen}>
                <div className="navbar_button_user_loggedOut">
                  <span>USER</span>
                  {open ? (
                    <MdOutlineArrowDropUp className="user_dropdown_arrow_icon" />
                  ) : (
                    <MdOutlineArrowDropDown className="user_dropdown_arrow_icon" />
                  )}
                </div>
              </div>
              {open ? (
                <div className="user_dropdown_content">
                  <NavLink
                    onClick={goToTopOfPage}
                    className="user_dropdown_navlink"
                    to="/Login"
                    aria-label="User Info Page Link"
                  >
                    <div className="user_dropdown_list_loggedOut">LOGIN</div>
                  </NavLink>

                  <NavLink
                    onClick={goToTopOfPage}
                    className="user_dropdown_navlink"
                    to="/Registration"
                    aria-label="Log Out Page Link"
                  >
                    <div className="user_dropdown_list_loggedOut">REGISTER</div>
                  </NavLink>
                </div>
              ) : null}
            </div>
          )}

          {/* Shopping Cart Button */}

          {path === '/ShoppingCart' ||
          path === '/PaymentDialog' ||
          path === '/AdminPage' ||
          path === '/AdminPage' ||
          path === '/user' ||
          path === '/addPost' ||
          path === '/addCoffee' ||
          path === '/addMerch' ? null : (
            <NavLink
              className="navbar_shopping_cart_navlink"
              onClick={goToTopOfPage}
              aria-label="Shopping cart page link"
              to="/ShoppingCart"
            >
              <div
                className={
                  cartProductState.length === 0
                    ? 'navbar_shopping_cart_button'
                    : 'navbar_shopping_cart_button_itemsInCart'
                }
              >
                <FaShoppingBasket className="navbar_shopping_cart_button_icon" />
                {cartProductState.length === 0 ? null : (
                  <span className="cart_number_items">
                    {cartProductState.length}
                  </span>
                )}
              </div>
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
