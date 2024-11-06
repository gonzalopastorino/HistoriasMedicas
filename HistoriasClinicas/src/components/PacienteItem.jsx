import PropTypes from 'prop-types';

const PacienteItem = ({ paciente, editarPaciente }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5>{paciente.name}</h5>
        <h5>{paciente.apellido}</h5>
        <h6>Edad: {paciente.edad}</h6>
        <h6>Diagnostico: {paciente.diagnostico}</h6>
        <hr />
      </div>
      
      <button className="btn btn-primary" onClick={editarPaciente}>Editar</button>
      <button className="btn btn-danger">Eliminar</button>
    </li>
  );
};

PacienteItem.propTypes = {
  paciente: PropTypes.shape({
    name: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    edad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    diagnostico: PropTypes.string.isRequired,
  }).isRequired,
  editarPaciente: PropTypes.func.isRequired,
};

export default PacienteItem;
