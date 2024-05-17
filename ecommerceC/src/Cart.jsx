import { cart } from "./CartContext.jsx";
import { useContext, useEffect } from "react";

export function Cart() {
  // importo le funzioni necessarie in un oggetto
  const { cartProducts, decreaseProduct } = useContext(cart);

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  return (
    <>
      <h2>Cart</h2>
      <ul>
        {cartProducts &&
          cartProducts.map((element) => {
            return(
              <li key={element.id}>
                {element.title} {element.quantity}
                <button onClick={() => decreaseProduct(element)}>-</button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
