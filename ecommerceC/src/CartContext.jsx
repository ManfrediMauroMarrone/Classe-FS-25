import { createContext, useState } from "react"

export const cart = createContext();

 export function CartElement({children}) {
  const [cartProducts, setCartProducts] = useState([]);

  function addProduct(item) {
    const findProducts = cartProducts.find((i) => i.id === item.id);

    if (findProducts) {
        setCartProducts(cartProducts.map(element => {
            if (element.id === findProducts.id) {
               return {...findProducts, quantity: findProducts.quantity + 1}
            } else {
                return element
            }
        }))

    } else { setCartProducts([...cartProducts, {...item, quantity:1}])
    }
  }

  return <cart.Provider value={[addProduct, cartProducts]}>
    {children}
  </cart.Provider> 
}
