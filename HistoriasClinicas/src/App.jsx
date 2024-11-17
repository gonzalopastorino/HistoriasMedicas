import PatientsProvider from "./components/Context/patientsProvider";
import PacientesForm from "./components/PacientesForm";
import PacientesLista from "./components/PacientesLista";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import TablaPacientes from "./components/TablaPacientes";
import Navbar from "./components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  

  return (
    <>
    <PatientsProvider>
      <Navbar />
      <h2>Arranco!!</h2>
      <h1>Demo Manejo de Pacientes</h1>
      <PacientesForm />
      <PacientesLista />
      <SidebarMenu />
    </PatientsProvider>
    <TablaPacientes />  
    </>
  );
}

export default App;