// ADDING CURRENT CART TO USER DATABASE
import axios from 'axios';

export function addCurrentCart(products) {
  axios
    .patch(
      'https://bohemian-kids-backend-server.onrender.com/users/updateUserCurrentCart',
      {
        userId: localStorage.getItem('user_id'),
        products: products,
      }
    )
    .then((res) => {})
    .catch((err) => console.log(err));
}
