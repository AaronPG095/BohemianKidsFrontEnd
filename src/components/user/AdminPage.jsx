import React from 'react';
import { Link } from 'react-router-dom';

function AdminPage() {
  return (
    <main className="login_reg_page">
      <div className="login_reg_outer_container">
        <div className="login_reg_inner_container">
          <h1 className="login_reg_heading">ADMIN</h1>
          <section className="admin_section">
            <h2 className="admin_subheading">TO ADD A NEW BLOG POST:</h2>
            <Link
              to="/addPost"
              aria-label="link to add blog post page"
              className="login_reg_button_wrapper"
            >
              <button className="button_login_register">POST</button>
            </Link>
          </section>

          <br />
          <section className="admin_section">
            <h2 className="admin_subheading">TO ADD A NEW PRODUCT:</h2>
            <div className="admin_product_button_container">
              <Link
                to="/addCoffee"
                aria-label="link to add coffee product page"
                className="login_reg_button_wrapper"
              >
                <button className="button_login_register">COFFEE</button>
              </Link>
              <Link
                to="/addMerch"
                aria-label="link to add equipment product page"
                className="login_reg_button_wrapper"
              >
                <button className="button_login_register">MERCH</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default AdminPage;
