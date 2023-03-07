import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartProductContext } from '../context/CartProductContext';
import ShoppingCartItem from './ShoppingCartItem';
import { v4 as uuidv4 } from 'uuid';
import { BsCartDash } from 'react-icons/bs';

function ShoppingCart() {
  const { cartProductState, dispatchCartProductState } =
    useContext(cartProductContext);

  const shipping = 5.95;
  const total = (
    cartProductState.reduce((acc, curr) => {
      return acc + Number(curr.totalPrice) * curr.count;
    }, 0) + shipping
  ).toFixed(2);

  return (
    <>
      <main className="shopping_cart_main_page">
        <article className="shopping_cart_container">
          <h1 className="shopping_cart_heading">YOUR CART</h1>
          {cartProductState.length === 0 ? (
            <div className="shopping_cart_is_empty_container">
              <BsCartDash className="shopping_cart_is_empty_icon" />
              <div className="shopping_cart_is_empty_msg">
                Your cart is empty...
              </div>
              <Link
                className="button_link"
                to="/Shop"
                aria-label="Link back to shop"
              >
                <button className="button_medium_colorFour">TO SHOP</button>
              </Link>
            </div>
          ) : (
            <>
              <section className="shopping_cart_content_container ">
                {cartProductState.length > 0 &&
                  cartProductState.map((product) => (
                    <ShoppingCartItem
                      key={uuidv4()}
                      countFromItem={product.count}
                      type={product.type}
                      name={product.name}
                      totalPrice={product.totalPrice}
                      material={product.material}
                      size={product.size}
                      origin={product.origin}
                      processing={product.processing}
                      _id={product._id}
                    />
                  ))}
              </section>
              <section className="shopping_cart_calculation_container">
                <div className="shopping_cart_cost_labels_container">
                  <p className="shopping_cart_cost_label">SHIPPING:</p>
                  <p className="shopping_cart_cost_label">TOTAL:</p>
                </div>
                <section className="shopping_cart_cost_amounts_container">
                  <p className="shopping_cart_cost_amount">
                    {/* Javascript for price calculation */}
                    {shipping} €
                  </p>
                  <p className="shopping_cart_cost_amount">
                    {cartProductState.length > 0 && total} €
                  </p>
                </section>
              </section>

              <section className="shopping_cart_button_container">
                <Link to="/PaymentDialog" className="button_link">
                  <button className="button_large_colorOne">TO PAYMENT</button>
                </Link>
              </section>
            </>
          )}
        </article>
      </main>
    </>
  );
}

export default ShoppingCart;
