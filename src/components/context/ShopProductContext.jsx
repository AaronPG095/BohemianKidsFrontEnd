import React, { createContext, useReducer } from 'react';
export const shopProductContext = createContext();

/* Price will need to be related to size in the database (eg 200g / 500g) */

let initialValue = [
  {
    type: 'filter',
    productID: 'productID',
    name: 'productName',
    origin: 'productOrigin',
    masl: 'productMASL',
    variety: 'productVariety',
    processing: 'productProcessing',
    size: 'productSize',
    price: 'productPrice',
    cropYear: 'productCropYear',
    dryingTime: 'productDryingTime',
    flavourNotes: 'productFavourNotes',
    image:
      'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },

  {
    type: 'espresso',
    productID: 'productID',
    name: 'productName',
    origin: 'productOrigin',
    masl: 'productMASL',
    variety: 'productVariety',
    processing: 'productProcessing',
    size: 'productSize',
    price: 'productPrice',
    cropYear: 'productCropYear',
    dryingTime: 'productDryingTime',
    flavourNotes: 'productFavourNotes',
    image:
      'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    type: 'equipment',
    productID: 'productID',
    name: 'productName',
    material: 'productMaterial',
    size: 'productSize',
    price: 'productPrice',
    description: 'Sample description for equipment etc',
    image:
      'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    type: 'merchandise',
    productID: 'productID',
    name: 'productName',
    size: 'productSize',
    price: 'productPrice',
    description: 'Sample description for equipment etc',
    image:
      'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
];
function reducer(state, action) {
  switch (action.type) {
    case 'INITIAL':
      return action.payload;
    default:
      return state;
  }
}
function ShopProductContext({ children }) {
  const [shopProductState, dispatchShopProductState] = useReducer(
    reducer,
    initialValue
  );
  return (
    <shopProductContext.Provider
      value={{ shopProductState, dispatchShopProductState }}
    >
      {children}
    </shopProductContext.Provider>
  );
}
export default ShopProductContext;
