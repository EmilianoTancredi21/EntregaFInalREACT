import "./ProductCard.css"

const ProductCard = ( {title, price, itsColor} ) => {
    // let { title, price} = props
  return (
    <div>
        <h1 className={itsColor ? "color1" : "color2"}>{title}</h1>
        <h2>{price}</h2>
    </div>
  )
}

export default ProductCard