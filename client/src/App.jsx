import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import InfoLandingPage from "./pages/infolandingpage/InfoLandingPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { AuthProvoder } from "./components/Context/AuthContext";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import BienvenidaPage from "./pages/bienvenidapage/BienvenidaPage";
import { TaskProvider } from "./components/Context/TasksContext";

import PacientesForm from "./components/pacientes/PacientesForm";
import TasksPage from "./pages/taskspage/TasksPage";

function App() {
  return (
    <AuthProvoder>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/informacion" element={<InfoLandingPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Rutas protegidas */}
            <Route element={<ProtectedRoute />}>
              <Route path="/bienvenida" element={<BienvenidaPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/add-task" element={<PacientesForm />} />
              <Route path="/tasks/:id" element={<PacientesForm />} />
              <Route path="/profile" element={<h1>Profile</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvoder>
  );
}

export default App;
