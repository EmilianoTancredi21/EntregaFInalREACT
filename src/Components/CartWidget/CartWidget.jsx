import { GiGamepadCross } from "react-icons/gi"
import styles from "./CartWidget.module.css"
import { useContext } from "react"

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const { obtenerTotalProductos } = useContext(CartContext)

  const total = obtenerTotalProductos();

  return (
    <Link to= "/cart" style={{textDecoration:'none'}}>
    <div className={styles.span}>
      <span className={styles.contadorSpan}>{total}</span>
        <GiGamepadCross color="aliceblue" size={50} />
    </div>
    </Link>
  )
}

export default CartWidget