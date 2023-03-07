import React, { useEffect, createContext, useReducer } from 'react';

export const cartProductContext = createContext();

// Price will need to be related to size in the database (eg 200g / 500g)

// Quantity will need to be related to the User in Database (eg How many of each item they have in their Cart)

let initialValue = [];

function reducer(state, action) {
  switch (action.type) {
    case 'INITIALIZATION':

      localStorage.setItem(
        'CURRENT_CART',
        JSON.stringify(action.payload)
      );
      return action.payload;
    case 'ADD_TO_CART':
      if (state.length === 0) {
        localStorage.setItem(
          'CURRENT_CART',
          JSON.stringify([...state, action.payload])
        );
        return [...state, action.payload];
      } else if (
        state.filter((ele) => ele.productID === action.payload.productID)
          .length > 0
      ) {
        let newState = state.map((ele) => {
          if (ele.productID === action.payload.productID) {
            ele.count += action.payload.count;
            return ele;
          }
          return ele;
        });
        localStorage.setItem('CURRENT_CART', JSON.stringify(newState));
        return newState;
      } else {
        localStorage.setItem(
          'CURRENT_CART',
          JSON.stringify([...state, action.payload])
        );
        return [...state, action.payload];
      }
    case 'CHANGE_COUNT':
      let newState = state.map((ele) => {
        if (ele._id === action.payload._id) {
          if (ele.count === 0 && action.payload.value === -1) {
            ele.count = 0;
          } else {
            ele.count += action.payload.value;
          }
        }
        return ele;
      });
      localStorage.setItem('CURRENT_CART', JSON.stringify(newState));
      return newState;
    case 'DELETE_ONE':
      let newStateAfterDelete = state.filter(
        (ele) => ele._id !== action.payload._id
      );
      localStorage.setItem('CURRENT_CART', JSON.stringify(newStateAfterDelete));
      return newStateAfterDelete;
    case 'LOGOUT':
      return action.payload;
    default:
      return state;
  }
}
function CartProductContext({ children }) {
  const [cartProductState, dispatchCartProductState] = useReducer(
    reducer,
    initialValue
  );

  useEffect(() => {
    let user = localStorage.getItem('user_id');
    if (user === null) {
    }
  });

  useEffect(() => {
    let currentCart = localStorage.getItem('CURRENT_CART');

    if (currentCart === null) {
      dispatchCartProductState({ type: 'INITIALIZATION', payload: [] });
    } else {
      dispatchCartProductState({
        type: 'INITIALIZATION',
        payload: JSON.parse(currentCart),
      });
    }
    // dispatchCartProductState;
  }, []);

  return (
    <cartProductContext.Provider
      value={{ cartProductState, dispatchCartProductState }}
    >
      {children}
    </cartProductContext.Provider>
  );
}
export default CartProductContext;
