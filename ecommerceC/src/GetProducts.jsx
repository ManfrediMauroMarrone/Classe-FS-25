//https://fakestoreapi.com/products

import { useEffect, useState } from "react"
import { Card } from "./Card"
import './GetProducts.css'

export function GetProducts() {

    const [products, setProducts] = useState()

    async function fetchData() {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()

            console.log(data)

            setProducts(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect (() => {
        fetchData()
    }, [])

    return (
        <div className="card-container">
            {products && products.map(el => <Card prod={el} key={el.id}/>)}
        </div>
    )
}