import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import PacmanLoader from "react-spinners/PacmanLoader";
import { db } from "../../firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0px auto",
  padding: "40px"
  
};


const ItemListContainer = () => {
  
  const { categoryId } = useParams();


  const [items, setItems] = useState([])



  useEffect(() => {
    
    const itemsCollection = collection(db, "products")

    let consulta = undefined;

    if(categoryId){
      const q = query (itemsCollection, where("plataforma", "==", categoryId))
      consulta = getDocs(q)
    }else{
      consulta = getDocs(itemsCollection)
    }
    
    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        }
      });
      setItems(products)
    })
   

    


  }, [categoryId]);


 
 
  return (
    <div>

      {
        items.length > 0 ? ( 
          <ItemList items ={items} />
        ) :
        (
          <PacmanLoader
        color={"yellow"}
        // loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        )
      }
      
    </div>
  )
}

export default ItemListContainer