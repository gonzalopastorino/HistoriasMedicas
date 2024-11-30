import { BrowserRouter, Routes, Route } from "react-router-dom";  

//import SidebarMenuDos from "./components/SidebarMenuDos";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import "./pages/landingPage.css"
import InfoLandingPage from "./components/InfoLandingPage";
//import Navbar from "./components/Navbar/Navbar";
import "../src/components/Navbar/Navbar.css"
//import Grid from "./components/Grid/Grid"
import "../src/components/Grid/grid.css"




function App() {
  

  return (
    <>

    <InfoLandingPage />
    {/* <Navbar />   */}
    
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/informacion" element={<InfoLandingPage />} />

    </Routes>
    
    
    </BrowserRouter> */}


    </>
  );  
}

export default App;