import React, { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { getDoc, collection, doc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarCarrito, cantidadProductos } = useContext ( CartContext )

  const [productSelected, setProductSelected] = useState({})

  useEffect(() => {
    const itemCollection = collection(db, "products")
    const ref = doc(itemCollection, id)
    getDoc(ref)
    .then(res => {
      setProductSelected({
        ...res.data(),
        id: res.id
      })
    })
  },[id])


  const onAdd = (cantidad)=>{

    let producto = {
      ...productSelected,
      cantidad: cantidad
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `El producto ${productSelected.titulo} ha sido agregado exitosamente.`,
      showConfirmButton: false,
      timer: 1500
    })

    agregarCarrito(producto)


  }

  let cantidad = cantidadProductos(parseInt(id));

  return (
    <ItemDetail productSelected={productSelected} onAdd={onAdd} cantidad={cantidad}/>
  );
};

export default ItemDetailContainer;