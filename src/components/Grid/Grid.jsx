/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import Cards from "../Cards/Cards"
import "./Grid.css"
//carta medica comentada: fue de prueba
//import { cartaMedica } from "../../uttils/cartaMedica"


const Grid = () => {

  const { users, setUsers} = useState([])
  const [loading, setLoading] = useState(false)


  const handleClick = () => {
    // console.log("click")
    setLoading(true)
  }


  useEffect(() => {
    const fetchData = async () => {
            
      try {
        const url = 'https://randomuser.me/api/?results=20'
        const response = await fetch(url)  
        const data = await response.json()
        setUsers(data.results)
        setLoading(false)

      } catch (error) {
        console.error("UPS! Error Al obtener los datos de la api", error)
        setLoading(false)
      }
    }

    if(loading) {
      fetchData()
    }
      
  }, [loading])




  return (
    <div className="grid-container">
        <h1>Cartilla medica</h1>
        <button onClick={handleClick}>Acceder</button>

      <div className="grid">
        {users.map((user, id) => <Cards key={user.nombre + id} medico={user}/>)}
      </div>
    </div>
  )
}

export default Grid