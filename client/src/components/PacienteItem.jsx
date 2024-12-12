/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const PacienteItem = ( {data}) => {

  const { id, patient, complete } = data;
  const { nombre, apellido, edad, diagnostico } = patient;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center max-w-100">
    <div>
      <h5>{nombre}</h5>
      <h5>{apellido}</h5>

      <h6>Edad: {edad}</h6>
      <h6>Diagnostico: {diagnostico}</h6>
      <hr />
    </div>
    
      <button className="btn btn-primary" onClick={() => console.log("Editar")}>Editar</button>
      <button className="btn btn-danger" onClick={() => console.log("Eliminando")}>Eliminar</button>
      
    </li>
  )
}

export default PacienteItem