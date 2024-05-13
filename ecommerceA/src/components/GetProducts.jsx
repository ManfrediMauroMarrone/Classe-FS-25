import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import './GetProducts.css'
import { CartContext } from '../context/CartContext'

function GetProducts() {
    const [prodsArr, setProdsArr] = useState([])
    const {cartItems} = useContext(CartContext)

    async function fetchData(){
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const prods = await res.json()
            setProdsArr(prods)
            console.log(prods);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

  return (
    <div className='cards-container'>
       {prodsArr.map(item => {
        return <Card key={item.id} prodotto={item}/>
       })}
    </div>
  )
}

export default GetProducts