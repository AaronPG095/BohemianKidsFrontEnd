import React from 'react';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';

function RequireAuth({ children }) {
  const isAuth = JSON.parse(window.localStorage.getItem('isAuth'));
  const location = useLocation();

  if (!isAuth)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
        className='bg'
      >
        <h2>You need do be log in to see this page.</h2>
        <p>
          Click <Link to='/'>here</Link> to go to home page.
        </p>
      </div>
    );

  if (!isAuth) {
    return <Navigate to='/' state={{ path: location.pathname }} />;
  } else {
    return <Outlet />;
  }
}

export default RequireAuth;
