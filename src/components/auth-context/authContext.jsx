import React, { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { useMemo } from 'react';
import { setLocalStorage } from '../../util/setLocalStorage';
import { useCallback } from 'react';
import { isTokenExpire } from '../../util/isTokenExpire';
import { goToTopOfPage } from '../../util/goToTopPge';
import { cartProductContext } from '../context/CartProductContext';
import { addCurrentCart } from '../../util/addCurrentCart';

const AuthContext = createContext(null);

const initialValue = {
  isAuth: false,
  msg: '',
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialValue);

  const { cartProductState, dispatchCartProductState } =
    useContext(cartProductContext);

  // Checking if token is valid and if is already expired and then
  // logout user by delate localStorage and
  // changing isAuth to false

  useEffect(() => {
    const isLog = isTokenExpire();
    if (isLog) {
      (() => {
        const token = localStorage.getItem('token');
        axios
          // This address will change depends on PORT
          // you are using or after uploading
          .get('http://localhost:5001/protected', {
            headers: {
              Authorization: token,
            },
          })
          .then((user) => {
            window.localStorage.setItem('isAuth', 'true');
            setUser({
              isAuth: user.data.success,
              msg: '',
            });
          })
          .catch((err) => {
            window.localStorage.setItem('isAuth', 'false');
            setUser({
              isAuth: err.data.success,
              msg: '',
            });
          });
      })();
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('expires');
      localStorage.setItem('isAuth', 'false');
      localStorage.removeItem('user_id');
      localStorage.removeItem('role')
      setUser({
        isAuth: false,
        msg: '',
      });
      // addCurrentCart(cartProductState)
    }
  }, []);

  const login = useCallback((user) => {
    axios
      // This address will change depends on PORT
      // you are using or after uploading
      .post('http://localhost:5001/users/login', {
        email: user.email,
        password: user.password,
      })
      .then((user) => {
        setLocalStorage(user);
        window.localStorage.setItem('isAuth', 'true');
        setUser({
          isAuth: true,
          msg: '',
        });
      })
      .catch((error) => {
        window.localStorage.setItem('isAuth', 'false');
        setUser({
          isAuth: false,
          msg: error.response.data.msg,
        });
      });
  }, []);

  const logout = useCallback((products) => {
    axios
      // This address will change depends on PORT
      // you are using or after uploading
      .get('http://localhost:5001/users/logout')
      .then((respond) => {
        addCurrentCart(products);
        dispatchCartProductState({ type: 'INITIALIZATION', payload: [] });
        localStorage.removeItem('token');
        localStorage.removeItem('expires');
        localStorage.setItem('isAuth', 'false');
        localStorage.removeItem('user_id');
        localStorage.removeItem('role');
        localStorage.removeItem('CURRENT_CART');
        setUser({
          isAuth: false,
          msg: '',
        });
        goToTopOfPage();
      })
      .catch((err) => {
        throw new Error('Log out was not successfully.');
      });
  }, []);

  // memoize the full context value
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
    }),
    [user, setUser, login, logout]
  );

  return (
    <AuthContext.Provider value={{ contextValue }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('AuthContext was used outside of its Provider');
  }
  return context;
};
