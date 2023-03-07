// ADDING CURRENT CART TO USER DATABASE
import axios from 'axios'

export function addCurrentCart(products) {
  axios
     .patch('http://localhost:5001/users/updateUserCurrentCart', {
       userId: localStorage.getItem('user_id'),
       products: products,
     })
     .then((res) => {
      
     })
     .catch((err) => console.log(err));
 }
 