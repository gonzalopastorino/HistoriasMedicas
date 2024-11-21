import { Outlet } from "react-router-dom"
import SidebarMenu from "../components/Sidebar/SidebarMenu"


const DashboardLayout = () => {
  return (
    <>
    <div className="sidebar-content d-flex" >
    <SidebarMenu />
    <Outlet />

    </div>
    </>
  )
}

export default DashboardLayout