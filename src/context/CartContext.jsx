import { createContext, useState } from "react"

export const CartContext = createContext()


const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    //AGREGAMOS PRODUCTOS AL CARRITO
    const agregarCarrito = (producto) =>{
     let existe =  isInCart(producto.id)

     if (existe){

      let nuevoCarrito = cart.map((element) => {
        if (element.id === producto.id){
          return {
            ...element,
            cantidad:  producto.cantidad
          }
        }else{
          return element
        }
      })

      setCart(nuevoCarrito)

     }else{
       setCart( [...cart, producto] )
     }
    }

    //CONSULTAR SI EL PRODUCTO YA EXISTE EN EL CARRITO
    const isInCart = ( id ) => {
      return  cart.some ((elemento) => elemento.id === id)
    }


    //VACIAR EL CARRITO
    const vaciarCarrito = () =>{
      setCart([])
    }

    //SUMAMOS TODAS LAS CANTIDADES DE LOS PRODUCTOS EN EL CARRITO
    const obtenerTotalProductos = () =>{

      return cart.reduce( (acumulador, elemento) =>{
        return acumulador + elemento.cantidad
      }, 0 )
      
    }

    //ELIMINAR PRODUCTO
    const eliminarProducto = ( id ) =>{
      console.log(id)
      const nuevoCarrito = cart.filter((element) => element.id !== id)
      setCart(nuevoCarrito)
    }

    //USAMOS REDUCE PARA CALCULAR EL TOTAL DEL CARRITO
    const sumaTotal = () =>{
      return cart.reduce((acumulador, elemento) => {
          return acumulador + (elemento.cantidad * elemento.precio)
      }, 0)
    }

    //VERIFICAMOS LA CANTIDAD DEL PRODUCTO EN CUESTION
    const cantidadProductos = (id) =>{
    let productoSeleccionado =  cart.find((element) => element.id === id)
    return productoSeleccionado?.cantidad
    }

    let data = {

        cart,
        agregarCarrito,
        vaciarCarrito,
        obtenerTotalProductos,
        sumaTotal,
        eliminarProducto,
        cantidadProductos
    }

  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider