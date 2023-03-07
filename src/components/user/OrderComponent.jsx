import React from 'react';
import { MdElectricBike } from 'react-icons/md';

function OrderComponent({ orderDate, totalPrice, products }) {
  return (
    <>
      <div className="order_item">
        <h2 className="order_date_heading">
          {new Date(orderDate).toLocaleDateString()}
        </h2>

        {products.map((ele) => (
          <ul className="order_products_list">
            <li>Name: {ele.name}</li>
            <li>Quantity: {ele.count}</li>
          </ul>
        ))}

        <span className="order_list_item">Total Price: {totalPrice}</span>
      </div>
    </>
  );
}

export default OrderComponent;

// Products, Order Date, Total Price,
