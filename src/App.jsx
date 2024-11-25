import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import SidebarMenuDos from "./components/SidebarMenuDos";


function App() {
  

  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inicio" element={<LandingPage/>} />
          <Route path="/Sidebar" element={<SidebarMenuDos/>} />
        </Routes>
      


      </BrowserRouter>
      
  
    </>
  );  
}

export default App;