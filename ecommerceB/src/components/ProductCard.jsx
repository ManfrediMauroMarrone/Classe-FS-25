import classes from "./ProductCard.module.scss"

export function ProductCard ({ data }) {
    
    return (
        <div className={classes.cardContainer}>
            <header>
                <img src={data.image} alt="" />
            </header>

            <h2 className="title">
            {data.title}
            </h2>

            <p className="description">
            {data.description}
            </p>

            <p className="price">
            {data.price}
            </p>
        </div>
    )
}