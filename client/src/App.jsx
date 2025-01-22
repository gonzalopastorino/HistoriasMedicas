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
import ErrorPage from "./pages/errorpage/ErrorPage";
import PacientesForm from "./components/pacientes/PacientesForm";
import TablasForm from "./components/tabla/TablasForm";
import TasksPage from "./pages/taskspage/TasksPage";
import Profile from "./pages/profile/Profile";
import Calendario from "./pages/calendariopage/Calendario";
import "./App.css";

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
                        <div>
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
                        <div>
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
                        <div>
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
                        <div>
                          <TablasForm />
                        </div>
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/calendario"
                  element={
                    <div className="d-flex">
                      <SidebarMenu />
                      <div className="flex-grow-1">
                        <Navbar />
                        <div className="p-2">
                          <Calendario />
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
                          <Profile />
                        </div>
                      </div>
                    </div>
                  }
                />
                
              </Route>
              
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </main>
      </TaskProvider>
    </AuthProvoder>
  );
}

export default App;
