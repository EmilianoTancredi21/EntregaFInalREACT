import React, { useState } from "react";
import styles from "./FormChekout.module.css";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";



const FormCheckout = ({ cart, sumaTotal, setOrderId, vaciarCarrito }) => {
    const [userData, setUserData] = useState({
      name: "",
      email: "",
      phone: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let total = sumaTotal();
      let order = {
        buyer: userData,
        items: cart,
        total,
      };
      let orderCollection = collection(db, "orders");
      addDoc(orderCollection, order)
        .then((res) => {
          setOrderId(res.id);
          vaciarCarrito();
        })
        .catch((error) => console.log(error));
  
      cart.map((product) => {
        let refDoc = doc(db, "products", product.id);
        updateDoc(refDoc, { stock: product.stock - product.cantidad });
        return product
      });
    };
  
    return (
      <div>
        <h1>Estas a punto de finalizar tu compra!</h1>
        <div className={styles.contenedor}>

        
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="">Ingrese su nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <label htmlFor="">Ingrese su Email</label>
          <input
            type="text"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <label htmlFor="">Vuelva a ingresar su Email</label>
          <input
            type="text"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <label htmlFor="">Ingrese su Teléfono</label>
          <input
            type="text"
            placeholder="Telefono"
            value={userData.phone}
            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          />
          <div className={styles.submit}>
            <button type="submit">Comprar</button>
          </div>
          
        </form>
        </div>
      </div>
    );
  };

export default FormCheckout