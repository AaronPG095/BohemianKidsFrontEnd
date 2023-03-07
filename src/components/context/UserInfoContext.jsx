import React, { useEffect, createContext, useReducer } from 'react';

export const userInfoContext = createContext();

let initialValue = {};

function reducer(state, action) {
  switch (action.type) {
    case 'INITIALIZATION':
      return action.payload;
    default:
      return state;
  }
}
function UserInfoContext({ children }) {
  const [userInfoState, dispatchUserInfoState] = useReducer(
    reducer,
    initialValue
  );

  return (
    <userInfoContext.Provider value={{ userInfoState, dispatchUserInfoState }}>
      {children}
    </userInfoContext.Provider>
  );
}
export default UserInfoContext;
