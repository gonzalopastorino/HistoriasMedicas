import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import InfoLandingPage from "./pages/infolandingpage/InfoLandingPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { AuthProvoder } from "./components/Context/AuthContext";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import BienvenidaPage from "./pages/bienvenidapage/BienvenidaPage";
import { TaskProvider } from "./components/Context/TasksContext";
import SidebarMenu from "./components/siderbar/SiderBarMenu";
import Navbar from "./components/navbar/Navbar";

import PacientesForm from "./components/pacientes/PacientesForm";
import TablasForm from "./components/tabla/TablasForm";
import TasksPage from "./pages/taskspage/TasksPage";




function App() {
  return (
    <AuthProvoder>
      <TaskProvider>
        <main>
          <BrowserRouter>
            <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/informacion" element={<InfoLandingPage />} />
              <Route path="/login" element={<LoginPage />} />

              {/* Rutas protegidas */}
              <Route element={<ProtectedRoute />}>
                <Route
                  path="/bienvenida"
                  element={
                    <div className="d-flex">
                      <SidebarMenu />
                      <div className="flex-grow-1">
                        <Navbar />
                        <div className="p-4">
                          <BienvenidaPage />
                        </div>
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/tasks"
                  element={
                    <div className="d-flex">
                      <SidebarMenu />
                      <div className="flex-grow-1">
                        <Navbar />
                        <div className="p-4">
                          <TasksPage />
                        </div>
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/add-task"
                  element={
                    <div className="d-flex">
                      <SidebarMenu />
                      <div className="flex-grow-1">
                        <Navbar />
                        <div className="p-4">
                          <PacientesForm />
                        </div>
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/tasks/:id"
                  element={
                    <div className="d-flex">
                      <SidebarMenu />
                      <div className="flex-grow-1">
                        <Navbar />
                        <div className="p-4">
                          <PacientesForm />
                        </div>
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/tablas-pacientes"
                  element={
                    <div className="d-flex">
                      <SidebarMenu />
                      <div className="flex-grow-1">
                        <Navbar />
                        <div className="p-4">
                          <TablasForm />
                        </div>
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/profile"
                  element={
                    <div className="d-flex">
                      <SidebarMenu />
                      <div className="flex-grow-1">
                        <Navbar />
                        <div className="p-4">
                          <h1>Profile</h1>
                        </div>
                      </div>
                    </div>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </main>
      </TaskProvider>
    </AuthProvoder>
  );
}

export default App;
