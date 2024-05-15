import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartActions({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalCart, setTotalCart] = useState(0)

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

  function rmvFromCart(prod) {
    const foundItem = cartItems.find((item) => item.id === prod.id);

    if (foundItem.quantity > 1) {
      const modifiedArr = cartItems.map((element) => {
        if (element.id === foundItem.id) {
          return { ...element, quantity: element.quantity - 1 };
        } else {
          return element;
        }
      });
      setCartItems(modifiedArr);
    } else {
      const filtered = cartItems.filter(item => {
        return item.id != foundItem.id
      })

      setCartItems(filtered)
    }
  }


  function getTotalCart(){
    const total = cartItems.reduce((acc, cartItem) => {
      return acc + (cartItem.price * cartItem.quantity)
    }, 0)

    console.log(total);

    setTotalCart(total)
  }

  function resetCart(){
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, resetCart, rmvFromCart, getTotalCart, totalCart}}>
      {children}
    </CartContext.Provider>
  );
}
