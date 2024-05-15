import { CartContext } from "../context/CartContext";
import { useContext, useEffect } from "react";

function Cart() {
  const { cartItems, resetCart, rmvFromCart, getTotalCart, totalCart } =
    useContext(CartContext);

  useEffect(() => {
    getTotalCart();
  }, [cartItems]);

  return (
    <div className="cart">
      <h2>Carrello</h2>
      <button onClick={resetCart}>Reset Cart</button>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              {item.title} x {item.quantity}
              <button onClick={() => rmvFromCart(item)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <p>Totale: {totalCart} $</p>
    </div>
  );
}

export default Cart;
