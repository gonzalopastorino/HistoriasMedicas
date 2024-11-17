/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cards.css"

const Cards = ({ medico }) => {
  //console.log(medico)


  return (
    <div className="card-medico">
      <article className="article-medico">
        <img className="img-card-medico" src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="info-medico">
            <h5 className='card-medico-title'>{medico.nombre}</h5>
            <h5 className='card-medico-title'>{medico.apellido}</h5>
            <h6 className='card-medico-title'>{medico.especialidad}</h6>
        </div>        
      </article>
    </div>

  )
}

export default Cards