import { useState } from "react"
import styles from "./itemCount.module.css";

const ItemCount = ( {stock, initial=1, onAdd }) => {

    const [contador, setContador] = useState(initial)


    const sumar = () => {
        if (contador < stock){
            
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 1){
        setContador(contador - 1)
        }
    }

  return (
    <div>
        <h2 className={styles.contador}>Cantidad: {contador}</h2>
        <button className={styles.btn} onClick={restar}>-</button>
        <button className={styles.agregar} onClick={() => onAdd(contador)}>Agregar al carrito</button>
        <button className={styles.btn} onClick={sumar}>+</button>

    </div>
  )
}

export default ItemCount