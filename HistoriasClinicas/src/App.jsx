import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import InfoLandingPage from "./components/Infolandingpage/InfoLandingPage";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login"; 
import "./pages/landingPage.css";
import "../src/components/Navbar/Navbar.css";
import "../src/components/Grid/grid.css";

function App() {
  
  const location = useLocation();

  return (
    <>
    
      {location.pathname !== "/login" && <Navbar />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/informacion" element={<InfoLandingPage />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </>
  );
}

function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RootApp;
