import PacienteItem from "./PacienteItem";  
import { usePatients } from "../components/Context/patientsProvider";

const PacientesLista = () => {
  //const navigate = useNavigate();
  const { patients } = usePatients();
  return (
    <>
    <h3>Registro de Pacientes</h3>
    <ul className="lista-grupo">
      {patients.map((patient, index) => (
        <PacienteItem key={index} data={patient} />
      ))}
    </ul>
    </>
  )
  
}

export default PacientesLista