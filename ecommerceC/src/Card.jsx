export function Card({prod}) {
    return ( 
        <div className="card">
            <h3>{prod.title}</h3>
            <img src={prod.image}  />
            <p>{prod.description}</p>
            <p>{prod.price}</p>
        </div>
    )
}