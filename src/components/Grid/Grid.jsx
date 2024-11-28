
import {dataMedica} from "../../uttils/data"
import Cards from '../Cards/Cards';
import "./Grid.css"


const Grid = () => {

  return (
    
    <div className="grid-container">
      <h3>Cartilla Medica</h3>
      
      {/* <p>Breve escrito que presente e informe sobre cartilla medica.</p> */}
      
      <div className="grid">
      {dataMedica.map((medico) => <Cards key={medico.id} medico={medico} /> )} 
      </div>
    </div>
  )
}

export default Grid