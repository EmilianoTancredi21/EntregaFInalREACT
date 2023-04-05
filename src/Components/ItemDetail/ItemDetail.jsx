import styles from "./itemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({productSelected, onAdd, cantidad}) => {
  return (
    <div>
        <h1>{productSelected.titulo}</h1>
        <div className={styles.info}>
      <img src={productSelected.imagen} alt="" width={500} />
      <h3 className={styles.descripcion}>{productSelected.description}</h3>
    </div>
    <div className={styles.contador}>
    <h3 className={styles.precio}>Precio: ${productSelected.precio}</h3>
    <ItemCount stock={productSelected.stock} onAdd={onAdd} initial={cantidad}/>
    </div>
    </div>
    
    
  )
}

export default ItemDetail