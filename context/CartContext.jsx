import { createContext } from 'react';

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  clearCart: () => {},
  removeFromCart: () => {},
  cartCount: 0,
  totalPrice: 0
});

export default CartContext;