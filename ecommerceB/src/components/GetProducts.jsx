import useSWR from "swr";
import { ProductCard } from "./ProductCard";
import classes from "./GetProducts.module.scss"
const fetcher = (url) => fetch(url).then((res) => res.json());

export function GetProducts() {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);

  return (<div className={classes.cardContainer} >
    {error && <h3>Error</h3>  }
    {data && data.map((products) => {

    return <ProductCard key={products.id} data={products}/>
  })}</div>);
}
