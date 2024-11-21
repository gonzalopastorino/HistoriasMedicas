
import SidebarMenu from "../components/Sidebar/SidebarMenu"
import Grid from "../components/Grid/grid"



const Dashboard = () => {
  return (
    <>
      <div className="sidebar d-flex">
      <SidebarMenu />
      </div>
      <div className="grid d-flex">
      <Grid />
      </div>
    </>
  )
}

export default Dashboard