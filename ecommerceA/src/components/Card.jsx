import React, { useContext } from 'react'
import './Card.css'
import { CartContext } from '../context/CartContext'

function Card({prodotto}) {
    const {addToCart} = useContext(CartContext)
  return (
    <div className='card'>
        <h3>{prodotto.title}</h3>
        <img src={prodotto.image} alt={prodotto.title} />
        <p>{prodotto.description}</p>
        <span>Price: {prodotto.price} $</span>
        <button onClick={() => addToCart(prodotto)}>Add to Cart</button>
    </div>
  )
}

export default Card