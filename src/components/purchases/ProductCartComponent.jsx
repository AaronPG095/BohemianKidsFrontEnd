import React from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';

function ProductCartComponent({
  price,
  quantity,
  name,
  productID,
  origin,
  processing,
  size,
}) {
  return (
    <>
      <div>
        <h2 className="product_cart_component_heading">{name}</h2>
        <p className="">{origin}</p>
        <p>{processing}</p>
        <p>{size}</p>
        <button className="plus_minus_product_number_button">
          <HiPlusSm className="plus_minus_button_icon" />
          <div className="plus_minus_button_productNumber">
            {/* Product Number Func */}1
          </div>
          <HiMinusSm className="plus_minus_button_icon" />
        </button>
        <button className="product_cart_component_deleteButton">
          <GrClose />
          DELETE ITEM
        </button>
        <div className="product_cart_component_price_container">
          <div className="product_cart_component_price">{price}</div>
        </div>
      </div>
    </>
  );
}

export default ProductCartComponent;
