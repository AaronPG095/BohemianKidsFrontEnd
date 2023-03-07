import React, { useState, useContext } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { cartProductContext } from '../context/CartProductContext';
import { shopProductContext } from '../context/ShopProductContext';

function ProductCheckBox({ productID, currentProductType, setIsOpen }) {
  // const { shopProductState, dispatchShopProductState } =
  //   useContext(shopProductContext);
  const { shopProductState, dispatchShopProductState } =
    useContext(shopProductContext);

  const { cartProductState, dispatchCartProductState } =
    useContext(cartProductContext);

  const product = shopProductState.filter((ele) => ele._id === productID);

  const [price, setPrice] = useState(product[0].price);
  const [count, setCount] = useState(1);
  const handleChange = (event) => {
    if (event.target.value === '1.8') {
      setPrice((prev) => prev * 1.8);
    } else {
      setPrice((prev) => prev / 1.8);
    }
  };

  const addToCart = () => {
    let totalPrice = (price * count).toFixed(2);
    dispatchCartProductState({
      type: 'ADD_TO_CART',
      payload: { totalPrice, count, ...product[0], productID },
    });
    setIsOpen(false);
  };

  return (
    <>
      {currentProductType === 'filter' || currentProductType === 'espresso' ? (
        <>
          <label className="product_type_label" htmlFor="productType">
            SIZE
            <form
              name="productType"
              className="product_selection_type_container"
            >
              <div className="product_selection_item">
                <div className="product_type_selection_name">
                  155 {/* Connect to database */}
                </div>
                <input
                  className="product_type_selection_checkbox"
                  aria-label="product selection checkbox"
                  type="radio"
                  name="checkbox"
                  value={1}
                  defaultChecked
                  onClick={handleChange}
                />
              </div>
              <div className="product_selection_item">
                <div className="product_type_selection_name">
                  185
                  {/* Connect to database */}
                </div>
                <input
                  className="product_type_selection_checkbox"
                  aria-label="product selection checkbox"
                  type="radio"
                  name="checkbox"
                  value={1.8}
                  onClick={handleChange}
                />
              </div>
            </form>
          </label>
          <div className="modal_price_info_container">
            <div className="modal_product_price">
              {`${(price * count).toFixed(2)} €`}
            </div>
            <div className="modal_product_price_extraInfo">
              inkl. MwSt. kostenloser Versand. Lieferung 1 bis 3 Werktage in DE.
            </div>
          </div>
          <div className="modal_actions">
            <div className="modal_actions_container">
              <button className="plus_minus_product_number_button_large">
                <HiPlusSm
                  onClick={() => setCount((pref) => pref + 1)}
                  className="plus_minus_button_icon"
                />
                <div className="plus_minus_button_productNumber">{count}</div>
                <HiMinusSm
                  onClick={() =>
                    setCount((pref) => {
                      if (pref === 0) {
                        return pref;
                      } else {
                        return pref - 1;
                      }
                    })
                  }
                  className="plus_minus_button_icon"
                />
              </button>
              <Link type="button" onClick={addToCart} className="button_link">
                <button className="addToCart_button_small">
                  <FaShoppingBasket className="shop_addToCart_small_button_icon" />
                  ADD TO CART
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        // Equipment / Merchandise
        <>
          <label className="product_type_label" htmlFor="productType">
            MATERIAL
            <form
              name="productType"
              className="product_selection_type_container"
            >
              <div className="product_selection_item">
                <div className="product_type_selection_name">
                  EDELSTAHL {/* Connect to database */}
                </div>
                <input
                  className="product_type_selection_checkbox"
                  aria-label="product selection checkbox"
                  type="radio"
                  name="checkboxMaterial"
                  defaultChecked
                  value={1}
                  // onClick={handleChange}
                />
              </div>
              <div className="product_selection_item">
                <div className="product_type_selection_name">
                  COPPER
                  {/* Connect to database */}
                </div>
                <input
                  className="product_type_selection_checkbox"
                  aria-label="product selection checkbox"
                  type="radio"
                  name="checkboxMaterial"
                  value={1}
                  // onClick={handleChange}
                />
              </div>
            </form>
          </label>
          <label className="product_type_label" htmlFor="productType">
            SIZE
            <form
              name="productType"
              className="product_selection_type_container"
            >
              <div className="product_selection_item">
                <div className="product_type_selection_name">
                  155 {/* Connect to database */}
                </div>
                <input
                  className="product_type_selection_checkbox"
                  aria-label="product selection checkbox"
                  type="radio"
                  name="checkboxSize"
                  defaultChecked
                  value={1}
                  onClick={handleChange}
                />
              </div>
              <div className="product_selection_item">
                <div className="product_type_selection_name">
                  185
                  {/* Connect to database */}
                </div>
                <input
                  className="product_type_selection_checkbox"
                  aria-label="product selection checkbox"
                  type="radio"
                  name="checkboxSize"
                  value={1.8}
                  onClick={handleChange}
                />
              </div>
            </form>
          </label>
          <div className="modal_price_info_container">
            <div className="modal_product_price">
              {`${(price * count).toFixed(2)} €`}
            </div>
            <div className="modal_product_price_extraInfo">
              inkl. MwSt. kostenloser Versand. Lieferung 1 bis 3 Werktage in DE.
            </div>
          </div>
          <div className="modal_actions">
            <div className="modal_actions_container">
              <button className="plus_minus_product_number_button_large">
                <HiPlusSm
                  className="plus_minus_button_icon"
                  onClick={() => setCount((pref) => pref + 1)}
                />
                <div className="plus_minus_button_productNumber">{count}</div>
                <HiMinusSm
                  className="plus_minus_button_icon"
                  onClick={() =>
                    setCount((pref) => {
                      if (pref === 0) {
                        return pref;
                      } else {
                        return pref - 1;
                      }
                    })
                  }
                />
              </button>
              <Link type="button" onClick={addToCart} className="button_link">
                <button className="addToCart_button_small">
                  <FaShoppingBasket className="shop_addToCart_small_button_icon" />
                  ADD TO CART
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductCheckBox;
