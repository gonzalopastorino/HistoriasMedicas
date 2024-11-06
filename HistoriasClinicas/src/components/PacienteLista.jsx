import PropTypes from 'prop-types';
import PacienteItem from "./components/PacienteItem";

const PacientesLista = ({ pacientes, editarPaciente }) => {
  return (
    <>
      <h3>Registro de Pacientes</h3>
      <ul className="lista-grupo">
        {pacientes.map((paciente, index) => (
          <PacienteItem key={index} paciente={paciente} editarPaciente={() => editarPaciente(index)} />
        ))}
      </ul>
    </>
  );
};

PacientesLista.propTypes = {
  pacientes: PropTypes.arrayOf(PropTypes.object).isRequired,
  editarPaciente: PropTypes.func.isRequired,
};

export default PacientesLista;
