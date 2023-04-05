import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import Carrito from "./Components/Carrito/Carrito.jsx";
import Form from "./Components/Form/Form.jsx";
import CartContextProvider from "./context/CartContext.jsx";




const onAdd = (cantidad) => {
  if (cantidad == 1){
    alert(`Se agrego al carrito ${cantidad} elemento`)
  }else
  alert (`Se agrego al carrito ${cantidad} elementos`)
}

function App() {
  return ( 
    <BrowserRouter>

    <CartContextProvider>


    <Navbar / >
    
    <Routes>

    <Route path="/" element={ <ItemListContainer />} />  

    <Route path="/category/:categoryId" element={<ItemListContainer />} />

    <Route path="/cart" element={<Carrito />} />

    <Route path="/Formulario" element={<Form />} />

    <Route path="/item/:id" element={<ItemDetailContainer />} />

    <Route path="*" element={<h1> Página no disponible :( </h1>} />
    
    </Routes>
    
    <Footer / >

    </CartContextProvider>  
    
    </BrowserRouter>
    
)}

export default App;