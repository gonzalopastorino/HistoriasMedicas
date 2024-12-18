import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import InfoLandingPage from "./pages/infolandingpage/InfoLandingPage";
import LoginPage from "./pages/loginPage/LoginPage"
import { AuthProvoder } from "./components/Context/AuthContext";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import BienvenidaPage from "./pages/bienvenidapage/BienvenidaPage";
import TablePatients from "./pages/patientspage";

function App() {
  return (
    <AuthProvoder>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/informacion" element={<InfoLandingPage />} />
        <Route path="/login" element={<LoginPage />} />
    
        <Route element={<ProtectedRoute/>}>
        <Route path="/bienvenida" element={<BienvenidaPage/>}/>
        <Route path="/patients" element={<TablePatients/>}/>

        
        
            
          
        </Route>
      </Routes>
      </BrowserRouter>
    </AuthProvoder>
  );
}



export default App;