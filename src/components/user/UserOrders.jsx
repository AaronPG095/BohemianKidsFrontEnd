import React, { useEffect, useState } from 'react';
import OrderComponent from './OrderComponent';
import axios from 'axios';
import { uniqueId } from 'lodash';

function UserOrders() {
  const [orders, setOrders] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userID = localStorage.getItem('user_id');

    axios
      .post(
        'https://bohemian-kids-backend-server.onrender.com/orders/getOrders',
        { userID }
      )
      .then((userOrders) => {
        setOrders(userOrders.data.userOrders);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <main className="shopping_cart_main_page">
          <article className="shopping_cart_container">
            <h1 className="shopping_cart_heading">ORDERS</h1>
            <section className="orders_content_container">
              {orders &&
                orders.map((ele) => (
                  <>
                    <hr />
                    <OrderComponent
                      key={uniqueId()}
                      orderDate={ele.orderDate}
                      totalPrice={ele.price}
                      products={ele.products}
                    />
                  </>
                ))}
            </section>
          </article>
        </main>
      )}
    </>
  );
}

export default UserOrders;
