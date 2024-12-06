import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import InfoLandingPage from "./components/Infolandingpage/InfoLandingPage";
import Login from "./components/Login/login";
import Bienvenida from "./components/Bienvenida/Bienvenida";
import DefaultLayout from "../DefaultLayout";
import NoNavbarLayout from "./NoNavbarLayout";
import { AuthProvoder } from "./components/Context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvoder>
      <Routes>
        {/* Rutas con barra de navegación */}
        <Route
          path="/"
          element={
            <DefaultLayout>
              <LandingPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/home"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/informacion"
          element={
            <DefaultLayout>
              <InfoLandingPage />
            </DefaultLayout>
          }
        />

        {/* Rutas sin barra de navegación */}
        <Route
          path="/login"
          element={
            <NoNavbarLayout>
              <Login />
            </NoNavbarLayout>
          }
        />
        <Route
          path="/bienvenida"
          element={
            
              <NoNavbarLayout>
                <Bienvenida />
              </NoNavbarLayout>
            
          }
        />
      </Routes>
    </AuthProvoder>
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
