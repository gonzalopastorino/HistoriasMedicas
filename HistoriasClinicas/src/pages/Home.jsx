import Navbar from "../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import "../components/Navbar/Navbar.css"


const Home = () => {

  return (
    <>
    
    <Navbar />
    Home
    <button> <Link to={"/dashboard"}>Ir al Dashboard</Link></button>
    </>
    
  )
}

export default Home