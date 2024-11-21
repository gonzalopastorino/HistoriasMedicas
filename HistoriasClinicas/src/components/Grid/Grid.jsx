
import {dataMedica} from "../../uttils/data"
import Cards from '../Cards/Cards';
import "./Grid.css"


const Grid = () => {

  return (
    <div className="grid-container">
      <h1>Cartilla Medica</h1>
      <h2>Descripsion:</h2>
      <p>Breve escrito que presente e informe sobre cartilla medica.</p>
      
      <div className="grid">
      {dataMedica.map((medico, index) => <Cards key={index} medico={medico} /> )} 
      </div>
    </div>
  )
}

export default Grid