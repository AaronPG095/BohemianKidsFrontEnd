import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import { AuthProvider } from './components/auth-context/authContext';
import App from './App';
import './styles/style.scss';

import ShopProductContext from './components/context/ShopProductContext';
import CartProductContext from './components/context/CartProductContext';
import UserInfoContext from './components/context/UserInfoContext';
import NewsContext from './components/context/NewsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <CartProductContext>
        <AuthProvider>
          <ShopProductContext>
            <UserInfoContext>
              <NewsContext>
                <App />
              </NewsContext>
            </UserInfoContext>
          </ShopProductContext>
        </AuthProvider>
      </CartProductContext>
    </ErrorBoundary>
  </BrowserRouter>
);
