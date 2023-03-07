// ADDING CURRENT CART TO USER DATABASE
import axios from 'axios';

export function getUserCurrentCart(userId, dispatch) {
  axios
    .post('http://localhost:5001/users/getUserCurrentCart', { userId })
    .then((res) => {
   
      dispatch({ type: 'INITIALIZATION', payload: res.data.currentCart });
    })
    .catch((err) => console.log(err));
}
