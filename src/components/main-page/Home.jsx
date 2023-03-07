import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShoppingCart from '../purchases/ShoppingCart';
import Menu from '../secondary-pages/Menu';
import News from '../secondary-pages/News';
import Shop from '../secondary-pages/Shop';
import Login from '../user/Login';
import Registration from '../user/Registration';
import Imprint from '../secondary-pages/Imprint';
import IntroHero from './IntroHero';
import IntroMenu from './IntroMenu';
import IntroNews from './IntroNews';
import IntroShop from './IntroShop';
import PaymentDialog from '../purchases/PaymentDialogComponent';
import UserInfoPage from '../user/UserInfoPage';
import RequireAuth from '../auth-context/RequireAuth';
import { EmailVerificationLandingPage } from '../user/EmailVerificationLandingPage';
import AddCoffeePage from '../user/AddCoffeePage';
import AddMerchandisePage from '../user/addMerch';
import ForgotPasswordPage from '../user/ForgotPasswordPage';
import PasswordResetLandingPage from '../user/PasswordResetLandingPage';
import OneNewsPost from './OneNewsPost';
import AdminPage from '../user/AdminPage';
import AddBlogPost from '../user/AddBlogPost';
import UserOrders from '../user/UserOrders';

function HomePage() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <main className="main_container">
                <IntroHero />
                <IntroMenu />
                <IntroNews />
                <IntroShop />
                {/* <AddToCartModal /> */}
              </main>
            </>
          }
        ></Route>

        {/** 1. News Route */}
        <Route exact path="/News" element={<News />} />
        <Route exact path="/News/:id" element={<OneNewsPost />} />
        {/** 2. Menu Route */}
        <Route exact path="/Menu" element={<Menu />} />
        {/** 3. Shop */}
        <Route exact path="/Shop" element={<Shop />} />

        {/** 4. Log in */}
        <Route exact path="/Login" element={<Login />} />
        {/** 5. Registration  **/}
        <Route exact path="/Registration" element={<Registration />} />
        {/** 6. Shopping Cart **/}

        <Route exact path="/ShoppingCart" element={<ShoppingCart />} />
        {/** 7. Imprint **/}
        <Route exact path="/Imprint" element={<Imprint />} />
        {/* Payment Dialog */}
        <Route exact path="/PaymentDialog" element={<PaymentDialog />} />
        <Route path="/user" element={<RequireAuth />}>
          <Route path="/user" element={<UserInfoPage />}></Route>
        </Route>
        <Route
          path="/verify-email/:verificationString"
          element={<EmailVerificationLandingPage />}
        ></Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/reset-password/:passwordResetCode"
          element={<PasswordResetLandingPage />}
        />

        <Route path="/AdminPage" element={<AdminPage />}></Route>
        <Route path="/addPost" element={<AddBlogPost />}></Route>
        <Route path="/addCoffee" element={<AddCoffeePage />}></Route>
        <Route path="/addMerch" element={<AddMerchandisePage />}></Route>
        <Route path="/UserOrders" element={<UserOrders />}></Route>
      </Routes>
    </>
  );
}

export default HomePage;
