import { useState } from 'react'
import './App.css'
import { set } from 'mongoose'

function App() {
  const [Usuario,setUsuario] = useState('');
  const [Contraseña,setContraseña] = useState(false);
  const [Logueado,setLogueado] = useState('');
 
  function cambiarUsuario(evento){
    setUsuario(evento.target.value);
  }
  function cambiarContraseña(evento){
    setContraseña(evento.target.value);
  }

  async function Ingresar(){
    const peticion= await fetch ('http://localhost:3000/login?usuario=' + Usuario + '&contrase%C3%B1a=' +Contraseña);
    if (peticion.ok){
    alert('Usuario conectado correctamente');
    setLogueado(true);
  }
  else {
    alert('Usuario incorrecto');
  }
  }

  return (
    <>
      <h1>INICIO DE SESION</h1>
      <input placeholder='Usuario' type="text" name='usuario' id='usuario' value={Usuario} onChange={cambiarUsuario} />
      <input placeholder='Contraseña' type="password" name='contraseña' id='contraseña' value={Contraseña} onChange={cambiarContraseña}/>
      <button onClick={Ingresar}> Ingresar </button>
    </>
  )
}

export default App
