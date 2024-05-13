import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartActions({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(prod) {
    const foundItem = cartItems.find((item) => item.id === prod.id);

    if (foundItem) {
      const modifiedArr = cartItems.map((element) => {
        if (element.id === foundItem.id) {
          return { ...element, quantity: element.quantity + 1 };
        } else {
          return element;
        }
      });
      setCartItems(modifiedArr);
    } else {
      setCartItems([...cartItems, { ...prod, quantity: 1 }]);
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
