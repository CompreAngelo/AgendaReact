import logo from './logo.svg';
import './App.css';
import Lista from './Componentes/lista.js';
import { Formulario } from './Componentes/insertar';
import React, { useState } from 'react';



function App() {
  const [Dato, setDatos] = useState([])
  async function ConseguirDatos () {
    const Resultado = await Lista()

    setDatos(Resultado)
  }

  return (
    
    <div className="App">
      <header className="App-header">
        <p>
          Agregar un contacto.
        </p>

        <Formulario Refresh={ConseguirDatos}></Formulario>
        <br></br>
        <p>
          Lista de Contactos:
        </p>
        <Lista></Lista>
      </header>
    </div>
  );
}

export default App;
