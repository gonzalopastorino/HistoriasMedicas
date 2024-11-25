
import {dataMedica} from "../../uttils/data"
import Cards from '../Cards/Cards';
import "./Grid.css"


const Grid = () => {

  return (
    
    <div className="grid-container">
      <h1>Cartilla Medica</h1>
      <h2>Descripcion:</h2>
      <p>Breve escrito que presente e informe sobre cartilla medica.</p>
      
      <div className="grid">
      {dataMedica.map((medico) => <Cards key={medico.id} medico={medico} /> )} 
      </div>
    </div>
  )
}

export default Grid