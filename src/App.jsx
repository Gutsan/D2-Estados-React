import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Registro } from './Components/Registro';

function App() {
  const [Alerta, setAlerta] = useState({
    type: "",
    msg: "",
    visible: false,
  });

  return (
    <>
      <Registro Alerta={Alerta} setAlerta={setAlerta}/>
    </>
  )
}

export default App
