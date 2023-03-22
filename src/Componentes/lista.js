import {useState, useEffect} from 'react'
function Lista ({}) {
    const [contactos, setContactos] = useState([])
  useEffect(() => {
    fetch('http://www.raydelto.org/agenda.php')
    .then((Response) =>{
      return Response.json()
    })
    .then((contactos)=>{
      setContactos(contactos)
    })
  }, [])
    return(
      <div className='scroll'>
        <table border="1">
        <thead>
          <tr>
            <th>Nombre </th>
            <th>Apellido </th>
            <th>Telefono </th>
          </tr>
        </thead>
        <tbody>
          {contactos.map(con => {
            return (
              <tr key={con.codigo}>
                <td>{con.nombre} </td>
                <td>{con.apellido} </td>
                <td>{con.telefono} </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    );
}

export default Lista;