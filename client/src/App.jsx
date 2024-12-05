import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import InfoLandingPage from "./components/Infolandingpage/InfoLandingPage";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/login"; 
import Bienvenida from './components/Bienvenida/Bienvenida'
import "./pages/landingPage.css";
import "../src/components/Navbar/Navbar.css";
import "../src/components/Grid/grid.css";
import { AuthProvoder } from "./components/Context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Navbar />}
     
      <AuthProvoder>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/informacion" element={<InfoLandingPage />} />
          <Route path="/login" element={<Login />} /> 
          <Route element={<ProtectedRoute/>}>
        <Route path="/bienvenida" element={<Bienvenida/>}/>
        </Route>
        </Routes>
       
      </AuthProvoder>
    </>
  );
}

function RootApp() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </BrowserRouter>
  );
}

const NoNavbarLayout = ({ children }) => {
  return <div>{children}</div>;
};




export default RootApp;
