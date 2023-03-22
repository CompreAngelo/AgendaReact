import React from "react";
import { useForm } from 'react-hook-form';

export const Formulario = (props) => {
    const { Refresh } = props

    const { register, handleSubmit} = useForm();
    const onSubmit= (data) =>{
        alert("Agregado correctamente");
        debugger
        Refresh()
      console.log(data);
      fetch('http://www.raydelto.org/agenda.php',{
        method: 'POST',
        body: JSON.stringify(data)
      })
    }


Refresh()
    return (
        <form onSubmit={handleSubmit (onSubmit)}>
            <label>Nombre:</label>
            <input type="text" {...register('nombre')}/>
            <br></br>
            <label>Apellido:</label>
            <input type="text" {...register('apellido')}/>
            <br></br>
            <label>Telefono:</label>
            <input type="text" {...register('telefono')}/>
            <br></br>
            <br></br>
            <button className="button" type="submit" value="enviar">Agregar</button>
        </form>
    )
};