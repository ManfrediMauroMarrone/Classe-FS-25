import { useContext, useEffect } from "react"
import { cart } from "./CartContext"


export function Card({prod}) {
    const {addProduct, cartProducts} = useContext(cart)

    return ( 
        <div className="card">
            <h3>{prod.title}</h3>
            <img src={prod.image}  />
            <p>{prod.description}</p>
            <p>{prod.price}</p>
            <button onClick={() => addProduct(prod)}>Add</button>
        </div>
    )
}