import React, { createContext, useReducer, useEffect } from 'react';

export const newsContext = createContext();

let initialValue = [];

function reducer(state, action) {
  switch (action.type) {
    case 'NEWS_INITIALIZATION':
      localStorage.setItem('CURRENT_NEWS', JSON.stringify(action.payload));
      return action.payload;
    case 'ADD_POST':
      localStorage.setItem(
        'CURRENT_NEWS',
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    case 'DELETE_POST':
      let newStateAfterDelete = state.filter(
        (ele) => ele._id !== action.payload
      );
      localStorage.setItem('CURRENT_NEWS', JSON.stringify(newStateAfterDelete));
      return newStateAfterDelete;
    default:
      return state;
  }
}
function NewsContext({ children }) {
  const [newsState, dispatchNewsState] = useReducer(reducer, initialValue);

  useEffect(() => {
    let currentNews = localStorage.getItem('CURRENT_NEWS');

    if (currentNews === null) {
      dispatchNewsState({ type: 'NEWS_INITIALIZATION', payload: [] });
    } else {
      dispatchNewsState({
        type: 'NEWS_INITIALIZATION',
        payload: JSON.parse(currentNews),
      });
    }
  }, []);
  return (
    <newsContext.Provider value={{ newsState, dispatchNewsState }}>
      {children}
    </newsContext.Provider>
  );
}
export default NewsContext;
