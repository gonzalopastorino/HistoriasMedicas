import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { getPatients } from "../../api/patients";

const TablePatients = () => {
  const [patients, setPatients] = useState([]);
  
  useEffect(() => {
    getPatients().then((body) => {
      setPatients(body.data);
    });
  }, []);

  if (patients.length === 0) {
    return <p>No hay pacientes</p>;
  }

  console.log(patients);

  return (
    <div>
      <h1>Lista de pacientes</h1>
      <ul>
        {patients.map((patient) => (
        // eslint-disable-next-line react/jsx-key
        <p>{patient.name}</p>
        //<p>{patient.apellido}</p>
        
        ))}
      </ul>
    </div>
  );

}
export default TablePatients;