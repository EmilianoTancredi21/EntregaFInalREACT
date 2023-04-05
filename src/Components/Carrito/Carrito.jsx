import { useContext, useState } from "react"
import { Button } from "@mui/material";
import { CartContext } from "../../context/CartContext"
import styles from "./Carrito.module.css"
import Swal from 'sweetalert2'
import FormCheckout from "../FormCheckout/FormCheckout"
import { Link } from "react-router-dom"

const Carrito = () => {


const { cart, vaciarCarrito, sumaTotal, eliminarProducto } = useContext( CartContext )

const [mostrarFormulario, setMostrarFormulario] = useState(false);
const [orderId, setOrderId] = useState(null)

const precioTotal = sumaTotal()

const vaciar = () => {
  Swal.fire({
    title: '¿Deseas vaciar el carrito?',
    text: "Se eliminaran todos los productos.",
    icon: 'warning',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, vaciar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Carrito vaciado!',
        'Tus productos han sido eliminados.',
        'success'
      )
      vaciarCarrito()
    }
  })
  
}

if(orderId){
  return(
    <div className={styles.container}>
      

      <h2>Gracias por su compra!</h2>
      <h3>Tu número de comprobante es: {orderId} </h3>
      <Link to="/">Seguir comprando</Link>

      </div>

  )
}


if (cart.length === 0){
  return  <div>
    <h1>No hay productos en el carrito</h1>
    <div className={styles.imgCart}>
    <img src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png" alt="" />
    </div>
  </div>
}



return (
  <div>
    {!mostrarFormulario ? (
      <>
        {cart.map((element) => (
          <div className={styles.contenedor} key={element.id} style={{display: "flex"}}>
            <img src={element.imagen} alt="" width={300} style={{marginRight: "16px"}} />
            <div className={styles.text} style={{flex: 1}}>
            <h2>{element.titulo}</h2>
            <h3>Plataforma: {element.plataforma}</h3>
            <h3>Genero: {element.genero}</h3>
            <h4>Precio: {element.precio}</h4>
            <h5>Cantidad: {element.cantidad}</h5>
            <button className={styles.btn} onClick={() => eliminarProducto(element.id)}>Eliminar</button>
            <hr />
            </div>
          </div>
        ))}
        <div className="cuerpoCarrito">
          {cart.length > 0 && (
            <div className={styles.cardButtons}>
              
              <button className={styles.btn} onClick={vaciar}>Vaciar carrito</button>
              <button className={styles.btn} onClick={() => setMostrarFormulario(true)}>Continuar compra</button>
            </div>
          )}
          <h1>Total del carrito: ${precioTotal} </h1>
        </div>
      </>
    ) : (
      <FormCheckout cart={cart} sumaTotal={sumaTotal} setOrderId={setOrderId} vaciarCarrito={vaciarCarrito}/>
    )}
  </div>
);
  
};

export default Carrito