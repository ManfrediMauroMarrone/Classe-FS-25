import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

export function GetProducts() {
    const {data, error} = useSWR("https://fakestoreapi.com/products", fetcher)

    console.log(data)
    
    
    return <div></div>
}
