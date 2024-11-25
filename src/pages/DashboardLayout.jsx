import { Outlet } from "react-router-dom"
import SidebarMenuDos from "../components/SidebarMenuDos"


const DashboardLayout = () => {
  return (
    <>
    <div className="sidebar-content d-flex" >
    <SidebarMenuDos />
    <Outlet />

    </div>
    </>
  )
}

export default DashboardLayout