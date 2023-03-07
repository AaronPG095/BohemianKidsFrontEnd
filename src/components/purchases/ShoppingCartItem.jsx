import React, { useContext, useEffect, useState } from 'react';
import { cartProductContext } from '../context/CartProductContext';
import { MdClose } from 'react-icons/md';
import { FaPlus, FaMinus } from 'react-icons/fa';

function ShoppingCartItem({
  type,
  name,
  _id,
  origin,
  processing,
  material,
  size,
  totalPrice,
  countFromItem,
}) {
  const { cartProductState, dispatchCartProductState } =
    useContext(cartProductContext);

  const [price, setPrice] = useState(totalPrice);

  function handlePlusCount(value) {
    dispatchCartProductState({
      type: 'CHANGE_COUNT',
      payload: { _id, value },
    });
  }

  function handleDelete() {
    dispatchCartProductState({
      type: 'DELETE_ONE',
      payload: { _id },
    });
  }

  return (
    <div className='shopping_cart_item_container'>
      <h3 className='shopping_cart_item_name'>{name}</h3>
      <p className='shopping_cart_product_properties'>
        {type === 'filter' || type === 'espresso' ? origin : material}
      </p>
      {(type === 'equipment' || type === 'merchandise') && (
        <p className='shopping_cart_product_properties'>{processing}</p>
      )}
      <p className='shopping_cart_product_properties'>{size}G</p>
      <button className='plus_minus_product_number_button_small'>
        <FaPlus
          onClick={() => handlePlusCount(1)}
          className='plus_minus_button_icon'
        />
        <div className='plus_minus_button_productNumber'>{countFromItem}</div>
        <FaMinus
          onClick={() => handlePlusCount(-1)}
          className='plus_minus_button_icon'
        />
      </button>
      <button onClick={handleDelete} className='delete_item_button'>
        <MdClose className='delete_item_button_icon' />
        DELETE ITEM
      </button>
      <div className='shopping_cart_item_price_container'>
        <p>{(price * countFromItem).toFixed(2)} €</p>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
