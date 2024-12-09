import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import InfoLandingPage from "./components/Infolandingpage/InfoLandingPage";
import Login from "./components/Login/login";
import Bienvenida from "./components/Bienvenida/Bienvenida";
import { AuthProvoder } from "./components/Context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvoder>
       <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/informacion" element={<InfoLandingPage />} />
        <Route path="/login" element={<Login />} />

     
        <Route element={<ProtectedRoute/>}>
         <Route path="/bienvenida" element={<Bienvenida/>}/>
         
            
          
        </Route>
      </Routes>
      </BrowserRouter>
    </AuthProvoder>
  );
}



export default App;
