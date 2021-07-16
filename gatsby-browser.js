import React from 'react';
import { ProductContextProvider } from './src/context/ProductContext';
import { CartContextProvider } from './src/context/CartContext';
import { GlobalStyle } from './src/components/globalStyles';

export const wrapRootElement = ({ element }) => (
  // Two context
  // wrapping entire app with both contexts
  // context is a global state management store
  // storing all products and collections in product context
  // everything to do with the cart withing cart context
  // because app is wrapped withing both context
  // broth context can be consumed anywhere withing our components within our app
  <ProductContextProvider>
    <CartContextProvider>{element}</CartContextProvider>
  </ProductContextProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);
