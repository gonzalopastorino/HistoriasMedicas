import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import InfoLandingPage from "./pages/infolandingpage/InfoLandingPage";
import LoginPage from "./pages/loginPage/LoginPage"
import { AuthProvoder } from "./components/Context/AuthContext";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import BienvenidaPage from "./pages/bienvenidapage/BienvenidaPage";
import { TaskProvider } from "./components/Context/TasksContext";

function App() {
  return (

    <AuthProvoder>
      <TaskProvider>
       <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/informacion" element={<InfoLandingPage />} />
        <Route path="/login" element={<LoginPage />} />

     
        <Route element={<ProtectedRoute/>}>
         <Route path="/bienvenida" element={<BienvenidaPage/>}/>
         
            
          
        </Route>
      </Routes>
      </BrowserRouter>
      </TaskProvider>
    </AuthProvoder>
  );
}



export default App;