import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import { useAuth } from '../auth-context/authContext';

function ProductComponent({
  setCurrentProductType,
  type,
  setIsOpen,
  setLoginPromptIsOpen,
  name,
  setCurrentProductID,
  productID,
  origin,
  masl,
  variety,
  processing,
  cropYear,
  dryingTime,
  flavourNotes,
  description,
  material,
  size,
  image,
}) {
  const auth = useAuth();
  const handleAddToCart = () => {
    if (auth.contextValue.user.isAuth === true) {
      setIsOpen(true);
      setCurrentProductID(productID);
      setCurrentProductType(type);
    } else {
      setLoginPromptIsOpen(true);
    }
  };
  return (
    <>
      {type === 'filter' || type === 'espresso' ? (
        /* Coffee Type Products */

        <div className="shop_product">
          <div className="shop_img_container">
            <img
              className="shop_img"
              src={image}
              alt="A type of coffee product"
            />
          </div>

          <ul key="coffeeInfoUl" className="shop_product_list">
            <li>NAME: {name}</li>
            <li>ORIGIN: {origin}</li>
            <li>MASL: {masl}</li>
            <li>VARIETY: {variety}</li>
            <li>PROCESSING: {processing}</li>
            <li>CROP YEAR: {cropYear}</li>
            <li>
              DRYING TIME: {dryingTime}
              {dryingTime === 1 ? ' Day' : ' Days'}
            </li>
            <br />
            <p>FLAVOUR NOTES: {flavourNotes} </p>
          </ul>

          <div className="shop_product_addToCartPopUp_button_container">
            <Link
              onClick={handleAddToCart}
              aria-label="add to cart button"
              className="button_link"
            >
              <button className="addToCart_button_small">
                <FaShoppingBasket className="shop_addToCart_small_button_icon" />
                ADD TO CART
              </button>
            </Link>
          </div>
        </div>
      ) : (
        /* Merchandise / Equipment Type Products */
        <div className="shop_product">
          <div className="shop_img_container">
            <img
              className="shop_img"
              src={image}
              alt="A type of equipment or merchandise product"
            />
          </div>
          <h3 className="shop_productType_heading">{name}</h3>
          <div className="shop_text_container">
            <p className="shop_medium_text">{description}</p>
          </div>
          <div className="shop_product_addToCartPopUp_button_container">
            <Link
              onClick={handleAddToCart}
              aria-label="add to cart button"
              className="button_link"
            >
              <button className="addToCart_button_small">
                <FaShoppingBasket className="shop_addToCart_small_button_icon" />
                ADD TO CART
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductComponent;
