
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cards.css"

import PropTypes from 'prop-types';



const Cards = ({medico} ) => {
  console.log(medico)
  
  
  Cards.propTypes = {
    medico: PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      apellido: PropTypes.string.isRequired,
      especialidad: PropTypes.string.isRequired,
      imagen: PropTypes.string.isRequired,
    }).isRequired,
  };
  

  return (
    <div className="card-medico">
      <article className="article-medico">
        <img className="img-card-medico" src={medico.imagen} />
        <div className="info-medico">
            <h5 className='card-medico-title'>Nombre: <span>{medico.nombre}</span></h5>
            <h5 className='card-medico-title'>Apellido: <span>{medico.apellido}</span></h5>
            <h6 className='card-medico-title'>Especialidad: <span>{medico.especialidad}</span></h6>
        </div>        
      </article>
    </div>

  )
}

export default Cards