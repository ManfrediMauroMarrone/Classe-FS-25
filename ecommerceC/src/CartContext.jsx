import { createContext, useState } from "react"

export const cart = createContext();

 export function CartElement({children}) {
  const [cartProducts, setCartProducts] = useState([]);

  function decreaseProduct(item) {
    // cerca se il prodotto esiste
  const foundProduct = cartProducts.find((i) => i.id === item.id);
  // se esiste riduci la quantita
  if (foundProduct && foundProduct.quantity > 1) {
      setCartProducts(cartProducts.map(element => {
          if(element.id === foundProduct.id) {
              // se la quantita' arriva a zero, elimina il prodotto da cart
                    return {...foundProduct, quantity: foundProduct.quantity - 1}
          } else {
              return element
          }
      }))
  } else if (foundProduct) {
      setCartProducts(cartProducts.filter(element => {
          return element.id !== foundProduct.id
      }))
  }

}

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

  return <cart.Provider value={{addProduct, cartProducts, decreaseProduct}}>
    {children}
  </cart.Provider> 
}
