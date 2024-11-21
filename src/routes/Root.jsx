import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import "../components/Navbar/Navbar.css"

const Root = () => {
  return (
    <>
    
        <Navbar />
        <Outlet />
    </>
  )
}

export default Root