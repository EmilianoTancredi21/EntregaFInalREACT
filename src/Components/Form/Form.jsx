import { useState } from "react"

const Form = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  })

 const handleChange = (e) => {
  setUserData({...userData, [e.target.name]: e.target.value})
 }

 const handleSubmit = (e) => {
  e.preventDefault();

  if (userData.name.length < 5){
    
  }else if(userData.email.includes("@")){

  }else if(userData.password.includes(" ")){

  }
 }



  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Ingrese su nombre" onChange={handleChange} name="name" />
          <input type="text" placeholder="Ingrese su email" name="email" onChange={handleChange} />
          <input type="text" placeholder="Ingrese su contraseña" name="password" onChange={handleChange} />
          <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Form